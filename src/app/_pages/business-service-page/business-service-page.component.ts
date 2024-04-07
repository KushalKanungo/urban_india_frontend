import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { BusinessServiceModal } from 'src/app/_models/business_service';
import { Filter } from 'src/app/_models/filter';
import { Review } from 'src/app/_models/reviews';
import { BusinessServicesService } from 'src/app/_services/business-services.service';
import { CartService } from 'src/app/_services/cart.service';
import { environment } from 'src/environment/environment';
import { ReviewPageComponent } from '../review-page/review-page.component';
import { ReviewService } from 'src/app/_services/review.service';

@Component({
  selector: 'app-business-service-page',
  templateUrl: './business-service-page.component.html',
  styleUrls: ['./business-service-page.component.scss'],
})
export class BusinessServicePageComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly businessServicesService: BusinessServicesService,
    private readonly dialogService: DialogService,
    private readonly reviewService: ReviewService,
    private cartService: CartService,
  ) {}
  businessService!: BusinessServiceModal;
  similarBusinessServices: BusinessServiceModal[] = [];
  serviceImage = '';
  reviews: Review[] = []
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ data: { dto } }) => {
      this.businessService = dto;
      this.serviceImage = this.businessService.image
        ? environment.baseUrl + '/image/' + this.businessService.image
        : 'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80';
    });
    this.fetchSimilarServices();
    this.fetchReviews();
  }

  addItem() {
    this.cartService.addServiceToCart(this.businessService);
  }

  fetchSimilarServices() {
    const tempFilter = new Filter();
    tempFilter.listOfBusinessServiceIds = [this.businessService.serviceTypeId];
    tempFilter.page = 0;
    tempFilter.per = 6;

    this.businessServicesService
      .getAllFilteredBusinssService(tempFilter.parsed())
      .subscribe({
        next: res => {
          this.similarBusinessServices = res.dto.content;
        },
        error: err => {},
      });
  }

  fetchReviews(){
    this.reviewService.getBusinessServiceReviews(this.businessService.id).subscribe({ next: (res: any) => {
      this.reviews = res.dto.data
    }
  })
  }

  openReviewsDialog() {
    const ref = this.dialogService.open(ReviewPageComponent, {
      maximizable: true,
      width: '90vw',
      height: '80vh',
      data: { id: this.businessService.id, type: 'businessService' }
    });
  }
}

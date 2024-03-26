import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessServiceModal } from 'src/app/_models/business_service';
import { Filter } from 'src/app/_models/filter';
import { Review } from 'src/app/_models/reviews';
import { BusinessServicesService } from 'src/app/_services/business-services.service';
import { CartService } from 'src/app/_services/cart.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-business-service-page',
  templateUrl: './business-service-page.component.html',
  styleUrls: ['./business-service-page.component.scss'],
})
export class BusinessServicePageComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly businessServicesService: BusinessServicesService,
    private cartService: CartService,
  ) {}
  businessService!: BusinessServiceModal;
  similarBusinessServices: BusinessServiceModal[] = [];
  serviceImage = '';
  reviews: Review[] = [
    {
      id: 1,
      description: 'The service was excellent and the staff was very friendly.',
      rating: 5,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'John Doe'},
      date: new Date('2022-05-15'),
    },
    {
      id: 1,
      description:
        'I had a wonderful time and would definitely come back again.',
      rating: 4.5,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Jane Smith'},
      date: new Date('2022-07-01'),
    },
    {
      id: 1,
      description: 'The staff was attentive and the food was delicious.',
      rating: 4,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'Mike Johnson'},
      date: new Date('2022-09-20'),
    },
    {
      id: 1,
      description: 'The service was okay, but nothing exceptional.',
      rating: 3,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Sarah Williams'},
      date: new Date('2022-08-10'),
    },
    {
      id: 1,
      description: 'The service was poor and the food was not up to par.',
      rating: 2,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'Robert Davis'},
      date: new Date('2022-06-05'),
    },
    {
      id: 1,
      description: 'The hotel exceeded my expectations. Highly recommended.',
      rating: 5,
      businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Emily Wilson'},
      date: new Date('2022-11-12'),
    },
    {
      id: 1,
      description: 'The food was decent, but nothing extraordinary.',
      rating: 3.5,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'David Thompson'},
      date: new Date('2022-10-03'),
    },
    {
      id: 1,
      description: 'I had a terrible time at this hotel. Avoid at all costs.',
      rating: 1,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Amy Anderson'},
      date: new Date('2022-12-28'),
    },
    {
      id: 1,
      description: 'The service was good and the prices were reasonable.',
      rating: 4,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'Daniel Lee'},
      date: new Date('2022-07-22'),
    },
    {
      id: 1,
      description:
        'The staff went above and beyond to make our stay comfortable.',
      rating: 5,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Sophia Moore'},
      date: new Date('2022-04-02'),
    },
  ];
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
}

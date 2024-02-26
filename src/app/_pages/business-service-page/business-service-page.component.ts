import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessServiceModal } from 'src/app/_models/business_service';
import { Filter } from 'src/app/_models/filter';
import { Reviews } from 'src/app/_models/reviews';
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
  reviews: Reviews[] = [
    {
      title: 'Great Experience',
      description: 'The service was excellent and the staff was very friendly.',
      rating: 5,
      service: 'Restaurant',
      business: 'ABC Restaurant',
      customer: 'John Doe',
      date: new Date('2022-05-15'),
    },
    {
      title: 'Highly Recommend',
      description:
        'I had a wonderful time and would definitely come back again.',
      rating: 4.5,
      service: 'Hotel',
      business: 'XYZ Hotel',
      customer: 'Jane Smith',
      date: new Date('2022-07-01'),
    },
    {
      title: 'Good Service',
      description: 'The staff was attentive and the food was delicious.',
      rating: 4,
      service: 'Restaurant',
      business: '123 Cafe',
      customer: 'Mike Johnson',
      date: new Date('2022-09-20'),
    },
    {
      title: 'Average Experience',
      description: 'The service was okay, but nothing exceptional.',
      rating: 3,
      service: 'Hotel',
      business: '456 Inn',
      customer: 'Sarah Williams',
      date: new Date('2022-08-10'),
    },
    {
      title: 'Disappointing',
      description: 'The service was poor and the food was not up to par.',
      rating: 2,
      service: 'Restaurant',
      business: '789 Bistro',
      customer: 'Robert Davis',
      date: new Date('2022-06-05'),
    },
    {
      title: 'Excellent Stay',
      description: 'The hotel exceeded my expectations. Highly recommended.',
      rating: 5,
      service: 'Hotel',
      business: 'PQR Resort',
      customer: 'Emily Wilson',
      date: new Date('2022-11-12'),
    },
    {
      title: 'Average Food',
      description: 'The food was decent, but nothing extraordinary.',
      rating: 3.5,
      service: 'Restaurant',
      business: 'LMN Grill',
      customer: 'David Thompson',
      date: new Date('2022-10-03'),
    },
    {
      title: 'Terrible Experience',
      description: 'I had a terrible time at this hotel. Avoid at all costs.',
      rating: 1,
      service: 'Hotel',
      business: 'STU Lodge',
      customer: 'Amy Anderson',
      date: new Date('2022-12-28'),
    },
    {
      title: 'Good Value',
      description: 'The service was good and the prices were reasonable.',
      rating: 4,
      service: 'Restaurant',
      business: 'VWX Diner',
      customer: 'Daniel Lee',
      date: new Date('2022-07-22'),
    },
    {
      title: 'Excellent Service',
      description:
        'The staff went above and beyond to make our stay comfortable.',
      rating: 5,
      service: 'Hotel',
      business: 'DEF Resort',
      customer: 'Sophia Moore',
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

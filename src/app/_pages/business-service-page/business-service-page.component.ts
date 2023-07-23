import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessServiceModal } from 'src/app/_models/business_service';
import { Reviews } from 'src/app/_models/reviews';

@Component({
  selector: 'app-business-service-page',
  templateUrl: './business-service-page.component.html',
  styleUrls: ['./business-service-page.component.scss'],
})
export class BusinessServicePageComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  businessService!: BusinessServiceModal;
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
    this.activatedRoute.data.subscribe(({data: {dto}}) => {
      console.log(dto);

      // console.log(dto);
      this.businessService = dto;
    });
  }
}

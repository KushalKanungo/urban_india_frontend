import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { BusinessServiceModal } from 'src/app/_models/business_service';
import { Reviews } from 'src/app/_models/reviews';
import { ReviewPageComponent } from '../review-page/review-page.component';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss'],
})
export class BusinessPageComponent {
  id!: number;
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
  businessServices: BusinessServiceModal[] = [];
  // businessServices: BusinessService[] = [
  //   {
  //     id: 1,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 4.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 2,
  //     title: 'AC Cleaning',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 3,
  //     title: 'Washing Machine Repair',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'Car Driver',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 4,
  //     title: 'Construction',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 5,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 6,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description:
  //       'All types of tech support. thid is a long sdessdotion  so thast ic an test that lons descrtiopotion can be put inmsdde here',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 1,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 4.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 2,
  //     title: 'AC Cleaning',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 3,
  //     title: 'Washing Machine Repair',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'Car Driver',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 4,
  //     title: 'Construction',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 5,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  //   {
  //     id: 6,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_code: '1234',
  //       city: 'Jaipur',
  //       flat_no: '204',
  //       state: 'Rajasthan',
  //     },
  //     mode: 1,
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  // ];

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
  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService,
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '1');
  }

  openReviewsDialog() {
    const ref = this.dialogService.open(ReviewPageComponent, {
      maximizable: true,
      width: '90vw',
      height: '80vh',
    });
  }
}

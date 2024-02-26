import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BusinessServiceModal } from '../_models/business_service';
import { BusinessServicesService } from '../_services/business-services.service';
import { Filter } from '../_models/filter';
import { Page } from '../_models/page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-service-list-page',
  templateUrl: './business-service-list-page.component.html',
  styleUrls: ['./business-service-list-page.component.scss'],
})
export class BusinessServiceListPageComponent implements OnInit {
  constructor(
    private businessService: BusinessServicesService,
    private activateRoute: ActivatedRoute,
  ) {}

  businessServicesData: BusinessServiceModal[] = [];
  businessServicePage!: Page<any>;
  filterModel = new Filter();
  businesses: { label: string; value: number }[] = [];
  servicesTypes: { label: string; value: number }[] = [];

  ngOnInit() {
    // this.businessService.getAllBusinessService().subscribe({
    //   next:(res)=>{
    //     this.businessServicesData = res.dto;
    //   },error:(err)=>{
    //     console.log(err);
    //   }
    // })

    this.filterModel.page = 0;
    this.filterModel.per = 10;
    this.activateRoute.data.subscribe(({ businesses, services }) => {
      this.businesses = businesses;
      this.servicesTypes = services;
    });

    this.getFilterBusinessServiceData();
  }

  appliedFilter() {
    this.getFilterBusinessServiceData();
  }

  onPageChange(event: any) {
    this.filterModel.page = event.page;
    this.filterModel.per = event.rows;
    this.getFilterBusinessServiceData();
  }

  getFilterBusinessServiceData() {
    this.businessService
      .getAllFilteredBusinssService(this.filterModel.parsed())
      .subscribe({
        next: res => {
          this.businessServicesData = res.dto.content;
          this.businessServicePage = res.dto;
        },
        error: err => {},
      });
  }
  // businessServices: BusinessServiceModal[] = [
  //   {
  //     id: 1,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
  //     address: {
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
  //       google_location_code: '1234',
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
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
  //       google_location_code: '1234',
  //       city: 'Jaipur',
  //       : '204',
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
}

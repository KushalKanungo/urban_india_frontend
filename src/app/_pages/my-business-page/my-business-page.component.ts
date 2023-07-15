import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BusinessServiceModal} from 'src/app/_models/business_service';
import { AddBusinessServiceFormComponent } from 'src/app/add-business-service-form/add-business-service-form.component';

@Component({
  selector: 'app-my-business-page',
  templateUrl: './my-business-page.component.html',
  styleUrls: ['./my-business-page.component.scss'],
})
export class MyBusinessPageComponent {
  businessServices: BusinessServiceModal[] = [];
  // businessServices: BusinessServiceM[] = [
  //   {
  //     id: 1,
  //     title: 'Tech Support',
  //     business_name: 'RegaTech',
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
  //     description: 'All types of tech support',
  //     image: 'thi',
  //     price: 5600,
  //     rating: 3.6,
  //     service_type: 'Technology',
  //   },
  // ];

  ref!: DynamicDialogRef;
  constructor(private dialogService: DialogService) {}
  openAddServiceDialog(service: BusinessServiceModal | null = null) {
    let header = 'Add a service';
    if (service) {
      header = `Update ${service.title}`;
    }
    this.ref = this.dialogService.open(AddBusinessServiceFormComponent, {
      header: header,
      data: { service },
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe(() => {});
  }
}
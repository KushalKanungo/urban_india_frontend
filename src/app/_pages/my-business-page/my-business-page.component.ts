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
  // businessServices: BusinessServiceModal[] = [];
  businessServices: BusinessServiceModal[] = [
    {
      id: 1,
      title: 'Tech Support',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 4.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 2,
      title: 'AC Cleaning',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 3,
      title: 'Washing Machine Repair',
      businessName: 'RegaTech',
      description: 'Car Driver',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 4,
      title: 'Construction',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 5,
      title: 'Tech Support',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 6,
      title: 'Tech Support',
      businessName: 'RegaTech',
      description:
        'All types of tech support. thid is a long sdessdotion  so thast ic an test that lons descrtiopotion can be put inmsdde here',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 1,
      title: 'Tech Support',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 4.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 2,
      title: 'AC Cleaning',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 3,
      title: 'Washing Machine Repair',
      businessName: 'RegaTech',
      description: 'Car Driver',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 4,
      title: 'Construction',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 5,
      title: 'Tech Support',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
    {
      id: 6,
      title: 'Tech Support',
      businessName: 'RegaTech',
      description: 'All types of tech support',
      image: 'thi',
      price: 5600,
      rating: 3.6,
      serviceTypeId:2,
      businessId: 2,
      statusId: '2',
      serviceTypeName: 'Technology',
    },
  ];

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

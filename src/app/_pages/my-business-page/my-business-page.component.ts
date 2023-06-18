import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddBusinessServiceFormComponent } from 'src/app/add-business-service-form/add-business-service-form.component';

@Component({
  selector: 'app-my-business-page',
  templateUrl: './my-business-page.component.html',
  styleUrls: ['./my-business-page.component.scss'],
})
export class MyBusinessPageComponent {
  ref!: DynamicDialogRef;
  constructor(private dialogService: DialogService) {}
  openAddServiceDialog() {
    this.ref = this.dialogService.open(AddBusinessServiceFormComponent, {
      header: 'Add a service',
      // width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe(() => {});
  }
}

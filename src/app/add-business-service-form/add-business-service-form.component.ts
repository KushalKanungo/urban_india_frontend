import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormDetailsService } from '../_services/form-details.service';
import { Service } from '../_models/service';
import { BusinessService } from '../_services/business.service';
import { BusinessServicesService } from '../_services/business-services.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-business-service-form',
  templateUrl: './add-business-service-form.component.html',
  styleUrls: ['./add-business-service-form.component.scss'],
})
export class AddBusinessServiceFormComponent implements OnInit {
  service_types: Service[] = [];
  addServiceForm!: FormGroup;
  constructor(
    private dialogConfig: DynamicDialogConfig,
    private formService: FormDetailsService,
    private businessServie: BusinessServicesService
  ) {}
  ngOnInit(): void {
    this._fetch_services();
    this.addServiceForm = new FormGroup({
      business_service_name: new FormControl(
        this.dialogConfig.data?.service?.title ?? '',
        [Validators.required]
      ),
      description: new FormControl(
        this.dialogConfig.data?.service?.description ?? '',
        [Validators.required, Validators.maxLength(50)]
      ),
      service_type_name: new FormControl('', [Validators.required]),
      price: new FormControl(this.dialogConfig.data?.service?.price ?? '', [
        Validators.required,
      ]),
    });
  }

  imageUrl: any = '';
  file: any;
  onFileSelect(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };

      reader.readAsDataURL(this.file);
    }
  }

  submitHandeler(formDetails: any) {
    const businessServiceModel = {
      title: formDetails.business_service_name,
      description: formDetails.description,
      price: formDetails.price,
      serviceType: formDetails.service_type_name,
    };
    console.log(formDetails);

    let businessServiceDetails = new FormData();
    businessServiceDetails.set('data', JSON.stringify(businessServiceModel));
    if (this.file) businessServiceDetails.set('file', this.file);

    this.businessServie.addBusinessService(businessServiceDetails).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  _fetch_services() {
    this.formService.getAllService().subscribe({
      next: (res) => {
        this.service_types = res;
        console.log(this.service_types);
      },
      error: (err) => {},
    });
  }
}

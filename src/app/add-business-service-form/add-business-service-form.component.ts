import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormDetailsService } from '../_services/form-details.service';
import { Service } from '../_models/service';
import { BusinessService } from '../_services/business.service';
import { BusinessServicesService } from '../_services/business-services.service';

@Component({
  selector: 'app-add-business-service-form',
  templateUrl: './add-business-service-form.component.html',
  styleUrls: ['./add-business-service-form.component.scss'],
})
export class AddBusinessServiceFormComponent implements OnInit {

  service_types :Service[]= [];
  constructor(private formService:FormDetailsService,private businessServie:BusinessServicesService){
  }
  ngOnInit(): void {
    this.formService.getAllService().subscribe({
      next:(res)=>{
          this.service_types = res;
      },error:err=>{

      }
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


  addServiceForm: FormGroup = new FormGroup({
    business_service_name: new FormControl('Test Service', [
      Validators.required,
    ]),
    description: new FormControl('Happy to serve you', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    service_type_name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  submitHandeler(formDetails: any) {
    const businessServiceModel = {
      title: formDetails.business_service_name,
      description: formDetails.description,
      price:formDetails.price,
      serviceType: formDetails.service_type_name
    }
    console.log(formDetails);

    let businessServiceDetails = new FormData();
    businessServiceDetails.set('data', JSON.stringify(businessServiceModel));
    if (this.file) businessServiceDetails.set('file', this.file);

    this.businessServie.addBusinessService(businessServiceDetails).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
    }
}

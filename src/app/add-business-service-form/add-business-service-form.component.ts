import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-business-service-form',
  templateUrl: './add-business-service-form.component.html',
  styleUrls: ['./add-business-service-form.component.scss'],
})
export class AddBusinessServiceFormComponent {
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

  service_types = [
    {
      label: 'Salon',
      value: 1,
    },
    {
      label: 'AC Repair',
      value: 2,
    },
    {
      label: 'Microwave Repair',
      value: 3,
    },
  ];

  addServiceForm: FormGroup = new FormGroup({
    business_service_name: new FormControl('Test Service', [
      Validators.required,
    ]),
    description: new FormControl('Happy to serve you', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    service_type_id: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  submitHandeler(formDetails: any) {
    console.log(formDetails);
  }
}

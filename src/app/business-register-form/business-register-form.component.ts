import { Component } from '@angular/core';

@Component({
  selector: 'app-business-register-form',
  templateUrl: './business-register-form.component.html',
  styleUrls: ['./business-register-form.component.scss'],
})
export class BusinessRegisterFormComponent {
  reader = new FileReader();
  imageUrl: any = '';
  onFileSelect(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };

      reader.readAsDataURL(file);
    }
  }
}

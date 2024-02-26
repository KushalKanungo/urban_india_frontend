import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { CartItemModel, CartService } from '../_services/cart.service';
import { OverlayPanel } from 'primeng/overlaypanel';

export interface SmallCardConfig {
  showRatings?: boolean;
  showPrice?: boolean;
  showDeleteIcon?: boolean;
}

@Component({
  selector: 'app-business-service-card-small',
  templateUrl: './business-service-card-small.component.html',
  styleUrls: ['./business-service-card-small.component.scss'],
})
export class BusinessServiceCardSmallComponent {
  @Input() businessServiceData!: BusinessServiceModal;
  @Input() showDeleteIcon!: boolean;
  @Input() cardConfig!: SmallCardConfig;
  @Input() cartItem!: CartItemModel;

  baseUrl = environment.baseUrl;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {}
  goToServicePage() {
    this.router.navigate(['service', this.businessServiceData.id]);
  }

  removeItem(id: number) {
    this.cartService.removeServiceToCart(id);
  }

  formatDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  dateChangeHandle(date: Date, op: OverlayPanel) {
    this.cartService
      .update({
        id: this.cartItem.id,
        completionDate: this.formatDate(this.cartItem.completionDate),
      })
      .subscribe({
        next: data => {
          op.toggle('');
        },
      });
  }
}

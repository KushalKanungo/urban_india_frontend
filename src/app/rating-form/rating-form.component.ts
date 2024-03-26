import { Component, Input } from '@angular/core';
import { OrderItem } from '../_models/order-item';
import { ReviewService } from '../_services/review.service';
import { MessageService } from 'primeng/api';
import { Review } from '../_models/reviews';

export type RatingFormConfig = {
  orderItem: OrderItem | null;
  action: 'update' | 'create';
  visible: boolean;
  review?: Review
};

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss'],
})
export class RatingFormComponent {
  @Input() dialogConfig: any;
  @Input() orderItem!: OrderItem | null;
  reviewFormModel: { rating: number; description: string } = {
    rating: 0,
    description: '',
  };
  constructor(
    private reviewService: ReviewService,
    private toasterService: MessageService,
  ) {}

  submitReviewForm() {
    if (this.orderItem) {
      this.reviewService
        .postReview(this.orderItem.id, this.reviewFormModel)
        .subscribe({
          next: () => {
            this.toasterService.add({
              severity: 'success',
              summary: 'Review added successfully',
            });
            this.dialogConfig.visible = false;
          },
        });
    }
  }
}

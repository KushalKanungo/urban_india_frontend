import { Component, Input } from '@angular/core';
import { Review } from '../_models/reviews';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() review!: Review;

  constructor() {}
}

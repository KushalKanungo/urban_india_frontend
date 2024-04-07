import { AfterViewInit, Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Review } from 'src/app/_models/reviews';
import { ReviewService } from 'src/app/_services/review.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
})
export class ReviewPageComponent implements AfterViewInit {
  reviews: Review[] = []

  id!: number;
  type: 'businessService' | 'business' ='businessService'
  constructor(private config: DynamicDialogConfig, private reviewService: ReviewService) {
    this.config.resizable = true;
    this.id = this.config.data.id
    this.fetchReviews()
  }

  ngAfterViewInit() {
    const maximizeButton: HTMLButtonElement | null = document.querySelector(
      '.p-dialog-header-maximize',
    );

    // maximizeButton?.click();
  }

  fetchReviews(){
    this.reviewService.getBusinessServiceReviews(this.id).subscribe({ next: (res: any) => {
      this.reviews = res.dto.data
    }
  })
  }
}
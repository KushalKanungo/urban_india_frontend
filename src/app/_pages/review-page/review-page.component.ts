import { AfterViewInit, Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Review } from 'src/app/_models/reviews';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
})
export class ReviewPageComponent implements AfterViewInit {
  reviews: Review[] = [
    {
      id: 1,
      description: 'The service was excellent and the staff was very friendly.',
      rating: 5,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'John Doe'},
      date: new Date('2022-05-15'),
    },
    {
      id: 1,
      description:
        'I had a wonderful time and would definitely come back again.',
      rating: 4.5,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Jane Smith'},
      date: new Date('2022-07-01'),
    },
    {
      id: 1,
      description: 'The staff was attentive and the food was delicious.',
      rating: 4,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'Mike Johnson'},
      date: new Date('2022-09-20'),
    },
    {
      id: 1,
      description: 'The service was okay, but nothing exceptional.',
      rating: 3,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Sarah Williams'},
      date: new Date('2022-08-10'),
    },
    {
      id: 1,
      description: 'The service was poor and the food was not up to par.',
      rating: 2,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'Robert Davis'},
      date: new Date('2022-06-05'),
    },
    {
      id: 1,
      description: 'The hotel exceeded my expectations. Highly recommended.',
      rating: 5,
      businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Emily Wilson'},
      date: new Date('2022-11-12'),
    },
    {
      id: 1,
      description: 'The food was decent, but nothing extraordinary.',
      rating: 3.5,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'David Thompson'},
      date: new Date('2022-10-03'),
    },
    {
      id: 1,
      description: 'I had a terrible time at this hotel. Avoid at all costs.',
      rating: 1,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Amy Anderson'},
      date: new Date('2022-12-28'),
    },
    {
      id: 1,
      description: 'The service was good and the prices were reasonable.',
      rating: 4,
       businessService: {id: 1, name: 'Restaurant'},
      user: { id: 1, name: 'Daniel Lee'},
      date: new Date('2022-07-22'),
    },
    {
      id: 1,
      description:
        'The staff went above and beyond to make our stay comfortable.',
      rating: 5,
       businessService: {id: 1, name: 'Hotel'},
      user: { id: 1, name: 'Sophia Moore'},
      date: new Date('2022-04-02'),
    },
  ];

  constructor(private config: DynamicDialogConfig) {
    config.resizable = true;
  }

  ngAfterViewInit() {
    const maximizeButton: HTMLButtonElement | null = document.querySelector(
      '.p-dialog-header-maximize',
    );

    maximizeButton?.click();
  }
}

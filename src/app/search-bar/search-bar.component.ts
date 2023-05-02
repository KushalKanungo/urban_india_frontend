import { Component } from '@angular/core';
/**
 *
 * This component will take input from the user and filter option and return this data to its
 * parent component from where further process will be done for api calling
 * */

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  visible: boolean = false;
  rangeValues: number[] = [0, 100];
  businesses: { title: string; id: string }[] = [
    {
      title: 'ABC Corporation',
      id: '1',
    },
    {
      title: 'XYZ Industries',
      id: '2',
    },
    {
      title: 'LMN Enterprises',
      id: '3',
    },
    {
      title: 'JKL Limited',
      id: '4',
    },
    {
      title: 'UVW Inc',
      id: '5',
    },
    {
      title: 'AAA Corporation',
      id: '6',
    },
    {
      title: 'DDD Industries',
      id: '7',
    },
    {
      title: 'GGG Enterprises',
      id: '8',
    },
    {
      title: 'JJJ Limited',
      id: '9',
    },
    {
      title: 'MMM Inc',
      id: '10',
    },
  ];
  ratings: number[] = [0, 100];
  selectedBusiness: { title: string; id: string }[] = [];

  showDialog() {
    this.visible = true;
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BusinessServiceModal } from '../_models/business_service';
import { Filter } from '../_models/filter';
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
export class SearchBarComponent implements OnInit {
  visible: boolean = false;
  // businesses: { title: string; id: string }[] = [
  //   {
  //     title: 'ABC Corporation',
  //     id: '1',
  //   },
  //   {
  //     title: 'XYZ Industries',
  //     id: '2',
  //   },
  //   {
  //     title: 'LMN Enterprises',
  //     id: '3',
  //   },
  //   {
  //     title: 'JKL Limited',
  //     id: '4',
  //   },
  //   {
  //     title: 'UVW Inc',
  //     id: '5',
  //   },
  //   {
  //     title: 'AAA Corporation',
  //     id: '6',
  //   },
  //   {
  //     title: 'DDD Industries',
  //     id: '7',
  //   },
  //   {
  //     title: 'GGG Enterprises',
  //     id: '8',
  //   },
  //   {
  //     title: 'JJJ Limited',
  //     id: '9',
  //   },
  //   {
  //     title: 'MMM Inc',
  //     id: '10',
  //   },
  // ];
  @Input() businesses: { label: string; value: number }[] = [];
  @Input() servicesTypes: { label: string; value: number }[] = [];

  ratings: number[] = [0, 100];
  selectedBusiness: { name: string; id: number }[] = [];
  selectedBusinessServicesType: { title: string; id: number }[] = [];

  @Input() filter!: Filter;

  @Output('filterApplied') filterAppliedModal = new EventEmitter<any>();

  ngOnInit(): void {}

  showDialog() {
    this.visible = true;
  }

  appliedFilter() {
    console.log('filter applied');
    console.log(this.filter.parsed());
    this.filterAppliedModal.emit();
  }
}

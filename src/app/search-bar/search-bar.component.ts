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

  showDialog() {
    this.visible = true;
  }
}

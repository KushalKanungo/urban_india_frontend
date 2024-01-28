import { Component } from '@angular/core';
import { progressBarConfig } from './_config/progress-bar-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urban_india_frontend';
  progressBarConfig = progressBarConfig
}

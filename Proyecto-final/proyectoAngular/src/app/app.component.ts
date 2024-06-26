import { Component } from '@angular/core';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dance Academy';

  constructor() {
    if (!environment.isProd) {
      console.log(environment);
    }
  }
}

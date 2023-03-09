import { Component, OnDestroy, Inject } from '@angular/core';
import { APP_CONFIG, appSettings, AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: APP_CONFIG, useValue: appSettings }
  ],
})
export class AppComponent implements OnDestroy {
  title = 'io_nlb_frontend_angular';
  description = 'This is a description';

  constructor(@Inject(APP_CONFIG) config: AppConfig) {}

  ngOnDestroy(): void {}
}

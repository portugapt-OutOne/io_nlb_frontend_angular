import { Component, OnDestroy, Inject } from '@angular/core';
import { APP_CONFIG, appSettings, AppConfig } from './app.config';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_CONFIG, useValue: appSettings }],
})
export class AppComponent implements OnDestroy {
  title = 'io_nlb_frontend_angular';
  description = 'This is a description';

  private setTitle = () => {
    const timestamp = new Date().toISOString();
    this.title = `Learning Angular (${timestamp})`;
  };

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    const complete$ = from(this.onComplete());
    complete$.subscribe(this.setTitle);
  }

  private onComplete() {
    return new Promise<void>((resolve) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  ngOnDestroy(): void {}
}

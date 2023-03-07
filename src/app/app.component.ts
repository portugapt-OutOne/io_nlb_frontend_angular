import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'io_nlb_frontend_angular';
  description = 'This is a description';

  ngOnDestroy(): void {
  }
}

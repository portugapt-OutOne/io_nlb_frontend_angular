import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './Components/component/component.component';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [AppComponent, ComponentComponent],
  imports: [BrowserModule, OrdersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

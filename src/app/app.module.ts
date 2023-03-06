import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './Components/component/component.component';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [AppComponent, ComponentComponent],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

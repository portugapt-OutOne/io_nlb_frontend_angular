import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentComponent } from './Components/component/component.component';
import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';


@NgModule({
  declarations: [AppComponent, ComponentComponent, CopyrightDirective, NumericDirective, KeyLoggerComponent],
  imports: [BrowserModule, ProductsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { ComponentComponent } from './Components/component/component.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';

import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    CopyrightDirective,
    NumericDirective,
    KeyLoggerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

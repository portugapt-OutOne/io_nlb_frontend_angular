import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsPipe } from '../products.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductsPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductListComponent,
    ProductsPipe,
  ]
})
export class ProductsModule { }

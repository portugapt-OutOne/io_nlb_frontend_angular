import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { SortPipe } from '../sort.pipe';

import { ProductHostDirective } from './product-host.directive';
import { PermissionDirective } from '../permission.directive';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    ProductViewComponent,
    ProductCreateComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PermissionDirective,
    ProductsRoutingModule,
  ],
  exports: [ProductListComponent, ProductDetailComponent],
})
export class ProductsModule {}

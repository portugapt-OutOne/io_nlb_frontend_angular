import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { SortPipe } from '../sort.pipe';

import { ProductHostDirective } from './product-host.directive';
import { PermissionDirective } from '../permission.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component'

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    ProductViewComponent,
    ProductCreateComponent,
    ProductsComponent,
    ProductTableComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PermissionDirective,
    ProductsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [ProductListComponent, ProductDetailComponent],
})
export class ProductsModule {}

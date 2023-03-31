import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from './products.service';

import { productDetailResolverFactory } from './product-detail.resolver';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: [{
      path: ':id',
      component: ProductDetailComponent,
      resolve: {
        product: 'productDetailResolver',
      },
    }],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'productDetailResolver',
      useFactory: productDetailResolverFactory,
      deps: [ProductsService],
    },
  ],
})
export class ProductsRoutingModule {}

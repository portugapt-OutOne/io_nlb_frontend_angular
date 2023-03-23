import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

import { ProductsService } from './products.service';

import { Product } from './product';

export const productDetailResolver: ResolveFn<Product> = (
  route: ActivatedRouteSnapshot
) => {
  const productService = inject(ProductsService);
  const id = Number(route.paramMap.get('id'));
  return productService.getProduct(id);
};

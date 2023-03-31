import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from './product';

export function productDetailResolverFactory(productService: ProductsService): ResolveFn<Product> {
  return (route: ActivatedRouteSnapshot) => {
    const id = Number(route.paramMap.get('id'));
    return productService.getProduct(id);
  };
}

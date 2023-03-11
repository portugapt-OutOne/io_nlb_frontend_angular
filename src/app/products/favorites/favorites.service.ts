import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ProductViewService } from '../product-view/product-view.service';
import { map, take, Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor(private productView: ProductViewService) {
    super();
  }

  override getProducts(): Observable<Product[]> {

    return super.getProducts().pipe(
      map(products => products.slice(1,3))
    )
  }
}

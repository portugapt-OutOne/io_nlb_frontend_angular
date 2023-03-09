import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ProductViewService } from '../product-view/product-view.service';

@Injectable({
providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor(private productView: ProductViewService) {
    super();
  }

  override getProducts(): Product[] {

    return super.getProducts().slice(0, 2)
  }
}

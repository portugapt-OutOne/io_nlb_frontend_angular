import { Injectable } from '@angular/core';

import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    console.log(`product ${product.name} added to cart`)
    this.cart.push(product);
  }
}

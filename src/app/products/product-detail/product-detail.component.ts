import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';

import { Observable, of, switchMap } from 'rxjs';

import { CartService } from '../../cart/cart.service';
import { ProductsService } from '../products.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnChanges {
  // 4. Input and Output properties
  @Input() product: Product | undefined;
  @Input() id = -1;
  @Output() bought = new EventEmitter();

  // 5. Public properties
  price: number | undefined;
  product$: Observable<Product> | undefined;
  authService: AuthService;

  // 6. Private properties
  private productService: ProductsService;
  private route: ActivatedRoute;
  private cartService: CartService;

  // 8. Constructor
  constructor(
    authService: AuthService,
    productService: ProductsService,
    route: ActivatedRoute,
    cartService: CartService
  ) {
    this.authService = authService;
    this.productService = productService;
    this.route = route;
    this.cartService = cartService;
  }

  // 9. Angular lifecycle hooks
  ngOnChanges(): void {
    this.loadProduct();
  }

  ngOnInit(): void {
    this.loadProductFromData();
  }

  // 10. Public methods
  /**
   * Adds a product to the cart and emits a "bought" event with the product name.
   * @param product - The product to be bought.
   */
  buy(product: Product) {
    this.cartService.addProduct(product);

    this.productService.getProduct(product.id).subscribe(() => {
      this.bought.emit(product.name);
    });
  }

  /**
   * Changes the price of a product and displays an alert with the updated price.
   * @param product - The product whose price will be changed.
   * @param price - The new price for the product.
   */
  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  // 11. Private methods
  /**
   * Loads a product from the ActivatedRoute paramMap.
   */
  private loadProduct(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.productService.getProduct(Number(params.get('id')));
      })
    );
  }

  /**
   * Loads a product from the ActivatedRoute data.
   */
  private loadProductFromData(): void {
    this.product$ = this.route.data.pipe(
      switchMap((data) => of(data['product']))
    );
  }

  // 7. Getters and Setters
  /**
   * Returns the name of the current product, or a fallback string if no product is selected.
   */
  get productName(): string {
    if (this.product) {
      return this.product.name;
    }
    return 'No Product selected';
  }
}

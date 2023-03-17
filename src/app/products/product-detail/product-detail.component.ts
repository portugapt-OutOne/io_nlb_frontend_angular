import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges {
  @Input()
  product: Product | undefined;

  @Input() id = -1;
  product$: Observable<Product> | undefined;

  @Output()
  bought = new EventEmitter<string>();

  constructor(
    private productService: ProductsService,
    public authService: AuthService
  ) {}

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  buy(product: Product) {
    console.log(`${this.product}`);
    this.productService.getProduct(product.id).subscribe(() => {
      this.bought.emit(product.name);
    });
  }

  changePrice(product: Product, price: string) {
    const priceAsNumber = parseFloat(price);
    this.productService
      .updateProduct(product.id, priceAsNumber)
      .subscribe(() => {
        alert(`The price of ${product.name} was changed!`);
      });
  }

  get productName(): string {
    if (this.product) {
      console.log(`Get ${this.product.name}`);
      return this.product.name;
    }
    return 'No Product selected';
  }
}

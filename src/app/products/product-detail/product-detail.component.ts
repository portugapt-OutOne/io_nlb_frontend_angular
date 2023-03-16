import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnChanges {
  @Input()
  product: Product | undefined;

  @Output()
  bought = new EventEmitter<string>();

  @Input() id = -1;
  product$: Observable<Product> | undefined;

  buy() {
    if (this.product) {
      this.bought.emit(this.product.name);
    }
  }

  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  get productName(): string {
    if (this.product) {
      console.log(`Get ${this.product.name}`);
    return this.product.name;
    }
    return 'No Product selected'
  }

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  constructor(private productService: ProductsService) { }
}

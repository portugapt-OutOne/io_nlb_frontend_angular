import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<string>();

  buy() {
    if (this.product) {
      this.bought.emit(this.product.name);
    }
  }

  get productName(): string {
    if (this.product) {
      console.log(`Get ${this.product.name}`);
    return this.product.name;
    }
    return 'No Product selected'
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }
}

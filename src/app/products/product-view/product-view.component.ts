import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  @Input()
  id = -1;

  name: string = '';
  price: number = 0;

  private productSub = new Subject<void>();

  constructor(private productviewService: ProductViewService) {}

  /** Services */
  private getProduct() {
    this.productviewService
      .getProduct(this.id)
      .pipe(takeUntil(this.productSub))
      .subscribe((product) => {
        if (product) {
          this.name = product.name;
          this.price = product.price;
        }
      });
  }

  /** Component Lifecycle */
  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }
}

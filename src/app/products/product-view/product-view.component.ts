import { Component, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit {
  @Input()
  id = -1;

  name: string = '';
  price: number = 0

  constructor(private productviewService: ProductViewService) {}

  /** Services */
  private getProduct() {
    this.productviewService.getProduct(this.id).subscribe(product => {
      if (product) {
        this.name = product.name;
        this.price = product.price
      }
    });
  }

  /** Component Modifiers */
  ngOnInit(): void {
    this.getProduct();
  }
}

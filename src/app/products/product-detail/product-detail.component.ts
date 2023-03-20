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
import { ProductsService } from '../products.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input()
  product: Product | undefined;

  @Input() id = -1;
  product$: Observable<Product> | undefined;

  @Output()
  bought = new EventEmitter<string>();

  price: number | undefined;

  constructor(
    public authService: AuthService,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.productService.getProduct(Number(params.get('id')));
      })
    );
  }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      switchMap((data) => of(data['product']))
    );

    // const id = this.route.snapshot.params['id'];
    // this.product$ = this.productService.getProduct(id);

    // this.product$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     return this.productService.getProduct(Number(params.get('id')));
    //   })
    // );
  }

  buy(product: Product) {
    console.log(`${this.product}`);
    this.productService.getProduct(product.id).subscribe(() => {
      this.bought.emit(product.name);
    });
  }

  changePrice(product: Product, price: number) {
    this.productService
      .updateProduct(product.id, price)
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

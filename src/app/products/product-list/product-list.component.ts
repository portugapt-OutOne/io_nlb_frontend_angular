import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  /** Services */
  private getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  /** Component Modifiers */
  ngAfterViewInit(): void {
    if (this.productDetail?.product) {
      console.log(`${this.productDetail.product.name}`);
    } else {
      console.log('No Product');
    }
  }

  ngOnInit(): void {
    this.getProducts()
  }

  /** Directives */
  trackByProducts(index: number, product: Product): string {
    return product.name;
  }

  /** Functionality */
  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}

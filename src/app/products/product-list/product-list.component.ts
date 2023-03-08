import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit {
  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  products: Product[] = [
    {
      name: 'Webcam',
      price: 100,
    },
    {
      name: 'Microphone',
      price: 200,
    },
    {
      name: 'Wireless keyboard',
      price: 85,
    },
  ];

  ngAfterViewInit(): void {
    if (this.productDetail?.product) {
      console.log(`${this.productDetail.product.name}`);
    } else {
      console.log('No Product');
    }
  }

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }

  trackByProducts(index: number, product: Product): string {
    return product.name;
  }
}

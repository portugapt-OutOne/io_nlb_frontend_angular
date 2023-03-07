import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit{
  selectedProduct = '';

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  products: string[] = [];

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`${this.productDetail.name}`);
    }
    else {
      console.log('No Product')
    }
  }

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }

  trackByProducts(index: number, name: string): string {
    return name;
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { favoritesFactory } from './favorites';
import { ProductViewService } from '../product-view/product-view.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    { provide: ProductsService,
      useFactory: favoritesFactory(true),
      deps: [ProductViewService] }
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  private getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  /** Component Modifiers */
  ngOnInit(): void {
    this.getProducts();
    }

}

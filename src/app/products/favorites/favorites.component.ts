import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from './favorites.service';
import { favoritesFactory } from './favorites';
import { ProductViewService } from '../product-view/product-view.service';

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

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    }

}

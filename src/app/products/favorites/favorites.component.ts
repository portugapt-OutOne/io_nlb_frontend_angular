import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from './favourites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    { provide: ProductsService, useClass: FavoritesService }
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    }

}

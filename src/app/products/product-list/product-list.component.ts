import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// 1. Component metadata

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],
})
// 2. Imports
export class ProductListComponent implements OnInit {
  // 3. Class declaration (already done)

  // 4. Input and Output properties (none in this case)

  // 5. Public properties
  /**
   * ViewChild to access the MatSort directive to apply sorting to the MatTableDataSource.
   */
  @ViewChild(MatSort) sort: MatSort | null = null;

  /**
   * A BehaviorSubject to hold the list of products.
   */
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  /**
   * The currently selected product.
   */
  selectedProduct: Product | undefined;

  /**
   * MatTableDataSource to hold and manage the list of products for the Angular Material Table.
   */
  dataSource!: MatTableDataSource<Product>;
  columnNames = ['name', 'price'];

  // 6. Private properties (none in this case)

  // 7. Getters and Setters (none in this case)

  // 8. Constructor
  /**
   * Constructor to inject the ProductsService dependency.
   *
   * @param productService The service responsible for managing product data.
   */
  constructor(private productService: ProductsService) {}

  // 9. Angular lifecycle hooks
  /**
   * ngOnInit lifecycle hook to retrieve the list of products on initialization.
   */
  ngOnInit(): void {
    this.getProducts();
  }

  // 10. Public methods
  /**
   * Adds a new product to the products BehaviorSubject.
   *
   * @param product The product to be added to the list.
   */
  onAdd(product: Product): void {
    const currentProducts = this.products$.getValue();
    this.products$.next([...currentProducts, product]);
  }

  /**
   * Displays an alert to the user that a product has been bought.
   */
  onBuy(): void {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  // 11. Private methods
  /**
   * Retrieves the list of products from the productService and updates the products BehaviorSubject.
   */
  private getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products$.next(products);
    });
  }

  // 12. Utility methods (none in this case)
}

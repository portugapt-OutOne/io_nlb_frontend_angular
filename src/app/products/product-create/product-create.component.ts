import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductsService } from '../products.service';

import { priceRangeValidator } from '../price-range.directive';
import { BooleanInput } from '@angular/cdk/coercion';

// 1. Component metadata
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
// 2. Imports
export class ProductCreateComponent implements OnInit {
  // 4. Input and Output properties
  /**
   * @Output() added: EventEmitter used to emit events when a new product is added
   */
  @Output() added = new EventEmitter<Product>();

  // 5. Public properties
  /**
   * products: An array of Product objects to store the products
   */
  products: Product[] = [];

  /**
   * categories: An array of strings representing product categories
   */
  categories = ['Hardware', 'Computers', 'Clothing', 'Software'];

  /**
   * showPriceRangeHint: A boolean value to toggle the display of the price range hint
   */
  showPriceRangeHint: boolean = false;

  /**
   * productForm: FormGroup instance to manage the form controls and validation
   */
  productForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(2),
        priceRangeValidator(),
      ],
    }),
  });

  /**
   * products$: Observable used for filtering products based on the name input value
   */
  products$: Observable<Product[]> | undefined;

  isChecked: BooleanInput;

  // 7. Getters and Setters
  /**
   * name: Getter to access the 'name' FormControl from the productForm
   */
  get name() {
    return this.productForm.controls.name;
  }

  /**
   * price: Getter to access the 'price' FormControl from the productForm
   */
  get price() {
    return this.productForm.controls.price;
  }

  // 8. Constructor
  /**
   * @param productsService: The ProductsService instance to interact with product data
   */
  constructor(private productsService: ProductsService) {}

  // 9. Angular lifecycle hooks
  /**
   * ngOnInit: Angular lifecycle hook to perform initialization tasks
   */
  ngOnInit(): void {
    this.setupPriceHint();
    this.loadProducts();
    this.setupProductNameSuggestions();
  }

  // 10. Public methods
  /**
   * createProduct: Method to create a new product and emit the 'added' event
   */
  createProduct(): void {
    console.log(`this price: ${this.price.value}`);
    this.productsService
      .addProduct(this.name.value, this.price.value)
      .subscribe((product) => {
        this.added.emit(product);
        this.productForm.reset();
      });
  }

  // 11. Private methods
  /**
   * setupPriceHint: Method to set up the price hint based on the price input value changes
   */
  private setupPriceHint(): void {
    this.price.valueChanges.subscribe((price) => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    });
  }

  /**
   * loadProducts: Method to load products using the ProductsService
   */
  private loadProducts(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  /**
   * setupProductNameSuggestions: Method to set up product name suggestions based on the name input value changes
   */
  private setupProductNameSuggestions(): void {
    this.products$ = this.name.valueChanges.pipe(
      map((name) =>
        this.products.filter((product) => product.name.startsWith(name))
      )
    );
  }

  // 12. Utility methods (none in this case)
}

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../product';
import { ProductsService } from '../products.service';

import { priceRangeValidator } from '../price-range.directive';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  @Output()
  added = new EventEmitter<Product>();
  showPriceRangeHint: boolean = false;

  get name() {
    return this.productForm.controls.name;
  }
  get price() {
    return this.productForm.controls.price;
  }

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

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.price.valueChanges.subscribe((price) => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    });
  }

  createProduct() {
    console.log(`this price: ${this.price.value}`);
    this.productsService
      .addProduct(this.name.value, this.price.value)
      .subscribe((product) => {
        this.added.emit(product);
        this.productForm.reset();
      });
  }
}

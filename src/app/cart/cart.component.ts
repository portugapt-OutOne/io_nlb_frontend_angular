import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../products/product';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartForm = this.formBuilder.group({
    products: this.formBuilder.array<number>([]),
  });

  cart: Product[] = [];

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cart.forEach(() => {
      this.cartForm.controls.products.push(
        this.formBuilder.control<number>(1, Validators.required)
      );
    });
  }
}

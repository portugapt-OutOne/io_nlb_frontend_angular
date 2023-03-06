import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  buy() {
    this.bought.emit(this.name);
  }
}

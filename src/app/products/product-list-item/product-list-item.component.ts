import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
  @Input() product$: Observable<Product> | undefined;
}

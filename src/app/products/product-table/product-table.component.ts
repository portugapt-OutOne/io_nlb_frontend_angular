// 2. Imports
import {
  Component,
  Input,
  ViewChild,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

// 3. Class declaration
/**
 * The ProductTableComponent displays a table of products with optional sorting and pagination.
 */
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements AfterViewInit {
  // 4. Input properties
  @Input() sort_active: string = 'inactive';
  @Input() paginator_active: string = 'inactive';

  // 5. Public properties
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  public dataSource = new MatTableDataSource<Product>();
  public columnNames = ['name', 'price', 'actions'];

  // 6. Private properties
  private _products$!: Observable<Product[]>;

  // 7. Getters and Setters
  /**
   * Getter for products$.
   * @returns The current Observable of products.
   */
  get products$(): Observable<Product[]> {
    return this._products$;
  }

  /**
   * Setter for products$. Updates the MatTableDataSource with new data.
   * @param products$ - The new Observable of products.
   */
  @Input()
  set products$(products$: Observable<Product[]>) {
    this._products$ = products$;
    this._products$.subscribe((products) => {
      this.dataSource.data = products;
    });
  }

  // 9. Angular lifecycle hooks
  ngAfterViewInit(): void {
    // Set the dataSource sort and paginator to the ViewChild MatSort and MatPaginator
    if (this.paginator_active === 'active') {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort_active === 'active') {
      this.dataSource.sort = this.sort;
    }
  }
}

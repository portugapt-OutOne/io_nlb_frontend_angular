import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

// 1. Component metadata
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
// 2. Imports
export class ProductTableComponent implements OnInit {
  // 3. Class declaration (already done)

  // 4. Input and Output properties
  @Input()
  set products$(products$: Observable<Product[]>) {
    this._products$ = products$;
    this._products$.subscribe((products) => {
      this.dataSource.data = products;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  // 5. Public properties
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  public dataSource = new MatTableDataSource<Product>();
  public columnNames = ['name', 'price', 'actions'];

  // 6. Private properties
  private _products$!: Observable<Product[]>;

  // 7. Getters and Setters
  get products$(): Observable<Product[]> {
    return this._products$;
  }

  // 8. Constructor (no injected dependencies, can be omitted)

  // 9. Angular lifecycle hooks
  ngOnInit(): void {
    // Set the dataSource sort to the ViewChild MatSort
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // 10. Public methods (none in this case)

  // 11. Private methods (none in this case)

  // 12. Utility methods (none in this case)
}

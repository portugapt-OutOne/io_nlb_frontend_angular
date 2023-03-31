import { productDetailResolverFactory } from './product-detail.resolver';
import { ActivatedRouteSnapshot, RouterStateSnapshot, convertToParamMap } from '@angular/router';
import { ProductsService } from './products.service';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { TestBed } from '@angular/core/testing';

class MockActivatedRouteSnapshot extends ActivatedRouteSnapshot {
  private _paramMap = convertToParamMap({ id: '1' });


  override get paramMap() {
    return this._paramMap;
  }
}

describe('productDetailResolver', () => {
  let resolver: ReturnType<typeof productDetailResolverFactory>;
  let productsService: jasmine.SpyObj<ProductsService>;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    productsService = jasmine.createSpyObj('ProductsService', ['getProduct']);
    route = new MockActivatedRouteSnapshot();
    state = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ProductsService, useValue: productsService },
      ],
    });

    resolver = productDetailResolverFactory(TestBed.inject(ProductsService));
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should resolve product data', () => {
    const expectedProduct = { id: 1, name: 'Test Product', 'price': 999};
    productsService.getProduct.and.returnValue(of(expectedProduct));

    const result = resolver(route, state);

    // Ensure the result is an Observable before subscribing
    if (result instanceof Observable) {
      result.subscribe((product: Product) => {
        expect(productsService.getProduct).toHaveBeenCalledWith(1);
        expect(product).toEqual(expectedProduct);
      });
    } else {
      fail('Expected an Observable as a result');
    }
  });
});

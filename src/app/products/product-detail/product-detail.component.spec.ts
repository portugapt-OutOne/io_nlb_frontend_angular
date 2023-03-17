import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let mockProductsService: jasmine.SpyObj<ProductsService>;
  const testProduct: Product = {
    id: 1,
    name: 'Test Product',
    price: 100,
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ProductsService', ['getProduct', 'updateProduct']);
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductDetailComponent],
      providers: [{ provide: ProductsService, useValue: spy }],
    });
    mockProductsService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    mockProductsService.getProduct.and.returnValue(of(testProduct));
    mockProductsService.updateProduct.and.returnValue(of(undefined));
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display product details', () => {
    const productName = fixture.debugElement.query(By.css('p:nth-child(1)'))
      .nativeElement.textContent;
    const productPrice = fixture.debugElement.query(By.css('p:nth-child(2)'))
      .nativeElement.textContent;

    expect(productName).toContain(testProduct.name);
    expect(productPrice).toContain(testProduct.price);
  });

  it('should emit bought event when Buy Now button is clicked', () => {
    spyOn(component.bought, 'emit');
    component.product = testProduct;
    fixture.detectChanges();
    const buyButton = fixture.debugElement.query(By.css('.bg-clip-padding'));
    buyButton.triggerEventHandler('click', null);
    expect(component.bought.emit).toHaveBeenCalledWith(testProduct.name);
  });

  it('should disable Change button when input value is not a valid number', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button[type="submit"]');
    const input = compiled.querySelector('input[type="number"]');

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(button.disabled).toBeTruthy();
  });

  it('should not update product price when input value is not a valid number', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button[type="submit"]');
    const input = compiled.querySelector('input[type="number"]');

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    button.click();
    fixture.detectChanges();

    expect(mockProductsService.updateProduct.calls.count()).toBe(0);
  });
});

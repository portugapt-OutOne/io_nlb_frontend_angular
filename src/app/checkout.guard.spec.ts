import { checkoutGuard } from './checkout.guard';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service'; // Import CartService
import { FormBuilder } from '@angular/forms'; // Import FormBuilder
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  template: '<router-outlet></router-outlet>'
})
class RoutingComponent { }

@Component({
  template: ''
})
class DummyComponent { }

describe('checkoutGuard', () => {
  let cartService: jasmine.SpyObj<CartService>;
  let formBuilder: FormBuilder;
  let cartComponent: CartComponent;
  let currentRoute: ActivatedRouteSnapshot;
  let currentState: RouterStateSnapshot;
  let nextState: RouterStateSnapshot;

  beforeEach(() => {
    cartService = jasmine.createSpyObj('CartService', ['methodName']); // Create a mock CartService with any method names you want to mock
    formBuilder = new FormBuilder(); // Initialize FormBuilder
    cartComponent = new CartComponent(cartService as unknown as CartService, formBuilder); // Initialize CartComponent with mock CartService and FormBuilder

    currentRoute = new ActivatedRouteSnapshot();
    currentState = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
    nextState = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
  });

  it('should be created', () => {
    expect(checkoutGuard).toBeTruthy();
  });

  it('should confirm navigation when there are pending items in the cart', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const result = checkoutGuard(cartComponent, currentRoute, currentState, nextState);
    expect(window.confirm).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('should not confirm navigation when there are no pending items in the cart', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const result = checkoutGuard(cartComponent, currentRoute, currentState, nextState);
    expect(window.confirm).toHaveBeenCalled();
    expect(result).toBe(false);
  });
});

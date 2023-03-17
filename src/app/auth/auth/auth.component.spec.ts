import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthComponent } from './auth.component';

class MockAuthServiceLoggedIn {
  isLoggedIn = true;

  login() {
    return of('fake_token');
  }

  logout() {
    this.isLoggedIn = false;
  }
}

class MockAuthServiceLoggedOut {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    return of('fake_token');
  }

  logout() {}
}


/*
    Test: 'should create'
        Purpose: This test checks if the AuthComponent is created successfully.
        Steps:
            The test checks if the component (an instance of AuthComponent) is truthy, meaning it has been created successfully.
        Result: If the component is created, the test passes; otherwise, it fails.

    Test: 'should show the Login button when logged out'
        Purpose: This test verifies that the Login button is visible, and the Logout button is hidden when the user is logged out.
        Steps:
            Call authService.logout() to ensure the user is logged out.
            Call fixture.detectChanges() to update the component view based on the new state.
            Query all button elements in the component's template using fixture.debugElement.queryAll(By.css('button')).
            Filter the button elements to find the Login button and the Logout button based on their inner text.
            Check if the hidden attribute of the Login button is undefined, indicating the button is visible.
            Check if the hidden attribute of the Logout button is an empty string, indicating the button is hidden.
        Result: If the Login button is visible and the Logout button is hidden, the test passes; otherwise, it fails.

    Test: 'should show the Logout button when logged in'
        Purpose: This test verifies that the Logout button is visible, and the Login button is hidden when the user is logged in.
        Steps:
            Call authService.login() to ensure the user is logged in.
            Call fixture.detectChanges() to update the component view based on the new state.
            Query all button elements in the component's template using fixture.debugElement.queryAll(By.css('button')).
            Filter the button elements to find the Login button and the Logout button based on their inner text.
            Check if the hidden attribute of the Login button is an empty string, indicating the button is hidden.
            Check if the hidden attribute of the Logout button is undefined, indicating the button is visible.
        Result: If the Logout button is visible and the Login button is hidden, the test passes; otherwise, it fails.

These three tests together help verify that the AuthComponent is created successfully and that it correctly displays the Login and Logout buttons based on the user's authentication state.
 */
describe('AuthComponent - Logged In', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: MockAuthServiceLoggedIn;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [{ provide: AuthService, useClass: MockAuthServiceLoggedIn }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as unknown as MockAuthServiceLoggedIn;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Login button when logged out', () => {
    authService.logout();
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const loginButton = buttons.filter((button) => button.nativeElement.textContent.includes('Login'))[0];
    const logoutButton = buttons.filter((button) => button.nativeElement.textContent.includes('Logout'))[0];
    expect(loginButton.attributes['hidden']).toBeUndefined();
    expect(logoutButton.attributes['hidden']).toBe('');
  });

  it('should show the Logout button when logged in', () => {
    authService.login();
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const loginButton = buttons.filter((button) => button.nativeElement.textContent.includes('Login'))[0];
    const logoutButton = buttons.filter((button) => button.nativeElement.textContent.includes('Logout'))[0];
    expect(loginButton.attributes['hidden']).toBe('');
    expect(logoutButton.attributes['hidden']).toBeUndefined();
  });
});

describe('AuthComponent - Logged Out', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: MockAuthServiceLoggedOut;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [{ provide: AuthService, useClass: MockAuthServiceLoggedOut }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as unknown as MockAuthServiceLoggedOut;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Login button when logged out', () => {
    authService.logout();
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const loginButton = buttons.filter((button) => button.nativeElement.textContent.includes('Login'))[0];
    const logoutButton = buttons.filter((button) => button.nativeElement.textContent.includes('Logout'))[0];
    expect(loginButton.attributes['hidden']).toBeUndefined();
    expect(logoutButton.attributes['hidden']).toBe('');
  });

  it('should show the Logout button when logged in', () => {
    authService.login();
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const loginButton = buttons.filter((button) => button.nativeElement.textContent.includes('Login'))[0];
    const logoutButton = buttons.filter((button) => button.nativeElement.textContent.includes('Logout'))[0];
    expect(loginButton.attributes['hidden']).toBe('');
    expect(logoutButton.attributes['hidden']).toBeUndefined();
  });
});

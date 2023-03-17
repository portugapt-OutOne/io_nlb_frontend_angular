import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and store the token', () => {
    const fakeToken = 'fake_token';

    service.login().subscribe((token) => {
      expect(token).toEqual(fakeToken);
      expect(service.isLoggedIn).toBe(true);
    });

    const req = httpTestingController.expectOne('https://fakestoreapi.com/auth/login');
    expect(req.request.method).toEqual('POST');
    req.flush(fakeToken);
  });

  it('should logout and remove the token', () => {
    service.logout();
    expect(service.isLoggedIn).toBe(false);
  });
});

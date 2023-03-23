import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  /**
   * Check if the user is logged in based on the presence of a token.
   * @returns {boolean} True if the user is logged in, otherwise false.
   */
  get isLoggedIn(): boolean { return this.token !== ''; }

  /**
   * Make an API request to authenticate the user and store the received token.
   * @returns {Observable<string>} The observable of the authentication token.
   */
  register(): Observable<string> {
    return this.http.post<string>('http://localhost:3000/register', {
      "email": "email@email.com",
      "password": "password"
    })
    .pipe(tap((token) => (this.token = token)));
  }

  login(): Observable<string> {
    return this.http
      .post<string>('http://localhost:3000/login', {
        email: 'email@email.com',
        password: 'password',
      })
      .pipe(tap((token) => (this.token = token)));
  }

  /**
   * Remove the stored token to log the user out.
   */
  logout() {
    this.token = '';
  }


  constructor(private http: HttpClient) {}
}

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
  login(): Observable<string> {
    return this.http
      .post<string>('https://fakestoreapi.com/auth/login', {
        username: 'david_r',
        password: '3478*#54',
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

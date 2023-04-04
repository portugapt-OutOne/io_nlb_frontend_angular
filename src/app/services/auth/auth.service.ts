// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Sample user data
  private users = [
    {
      username: 'user1',
      password: 'password1'
    },
    {
      username: 'user2',
      password: 'password2'
    }
  ];

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: {email: string, password: string}):boolean {
    if (user.email === 'doctor@test.com' && user.password === 'password') {
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
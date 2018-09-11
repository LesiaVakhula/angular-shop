import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  userAdmin = {
    name: 'admin',
    password: '12345'
  };

  login(): Observable<boolean> {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.name === this.userAdmin.name && user.password === this.userAdmin.password) {
      return of(true)
        .pipe(
          tap(val => this.isLoggedIn = true)
        );
    } else {
      return of(false)
      .pipe(
        tap(val => this.isLoggedIn = false)
      );
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

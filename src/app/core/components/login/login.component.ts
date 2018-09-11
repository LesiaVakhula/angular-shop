import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  user: User;
  private sub: Subscription;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = new User('', '');
  }

  login() {
    localStorage.setItem('user', JSON.stringify(this.user));
      this.sub = this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
          this.router.navigate([redirect]);
          }
      });
  }
}

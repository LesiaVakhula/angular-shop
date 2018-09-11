import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Product } from './shared/product.model';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  @ViewChild('appTitle')
  title: ElementRef;

  ngAfterViewInit() {
   this.title.nativeElement.innerText = 'Internet-Shop';
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log(this.authService.isLoggedIn);
  }
}

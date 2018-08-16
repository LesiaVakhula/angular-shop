import { Component } from '@angular/core';
import { Product } from './shared/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productShopCart: Product[] = [];

  putProductToCart(product: Product): void {
    this.productShopCart.push(product);
    console.log(this.productShopCart);
  }
}

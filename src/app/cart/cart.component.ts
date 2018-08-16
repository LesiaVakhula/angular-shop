import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShopCartService } from './shop-cart.service';
import { Product } from '../shared/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  productListCart: Product[] = [];

  constructor(private shopCartServise: ShopCartService) { }

  ngOnInit() {
    this.sub = this.shopCartServise.channel$.subscribe(
      data => {
        console.log(data);
        this.productListCart.push(data);
        console.log(this.productListCart);
      }
    );
  }

  deleteProduct(id: number): void {
    this.productListCart = this.productListCart.filter(item => item.id !== id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

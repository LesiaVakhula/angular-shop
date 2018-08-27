import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ShopCartService } from './shop-cart.service';
import { Product } from '../../shared/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  productListCart: Product[] = [];
  totalPrice: number;

  constructor(
    private shopCartServise: ShopCartService
  ) { }

  ngOnInit() {
    this.sub = this.shopCartServise.channel.subscribe(
      data => {
        const { product, action, id} = data;
        this.shopCartServise.changeArray(action, this.productListCart, product, id);
        console.log(this.productListCart);
      }
    );
  }

  deleteProduct(obj): void {
    this.shopCartServise.changeProduct(obj);
  }

  getAmount(): number {
    return this.shopCartServise.getAmount(this.productListCart);
  }

  getQuantity(): number {
    return this.shopCartServise.getQuantity(this.productListCart);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ShopCartService } from './shop-cart.service';
import { Product } from '../../shared/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  productListCart: Product[] = [];
  totalPrice: number;

  constructor(private shopCartServise: ShopCartService) { }

  ngOnInit() {
    this.sub = this.shopCartServise.channel.subscribe(
      data => {
        console.log(data);
        this.productListCart.push(data);
        console.log(this.productListCart);
      }
    );
  }


  deleteProduct(id: number): void {
    const item = this.productListCart.find( product => product.id === id);
    const index = this.productListCart.indexOf(item);
    this.productListCart.splice(index, 1);
  }

  getAmount(): number {
    return this.productListCart.reduce((sumItem, item) => (sumItem + item.price), 0);
  }

  getQuantity(): number {
    return this.productListCart.length;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
// import { Subscription, Observable } from 'rxjs';
import { Product } from '../shared/product.model';
import { ShopCartService } from './services/shop-cart.service';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [OrderByPipe]
})
export class CartComponent implements OnInit {
  // private sub: Subscription;
  productList: Product[] = [];
  totalPrice: number;

  constructor(
    private shopCartServise: ShopCartService,
    private orderByPipe: OrderByPipe
  ) { }

  ngOnInit() {
    this.productList = this.shopCartServise.getShopProducts();
    this.productList = this.orderByPipe.transform(this.productList, 'name');
  }

  deleteProduct(obj): void {
    this.shopCartServise.changeProduct(obj);
  }

  getAmount(): number {
    return this.shopCartServise.getAmount(this.productList);
  }

  getQuantity(): number {
    return this.shopCartServise.getQuantity(this.productList);
  }

  confirmOrder(str: string) {
    alert(`congratulation! You've bought ${this.getQuantity()} products! Thank you!`);
    this.shopCartServise.addOrders(this.productList);
    this.productList = [];
    console.log(this.shopCartServise.getAllOrders());
  }

}

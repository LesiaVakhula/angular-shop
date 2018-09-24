import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';
import { Subject, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  shopListProduct: Product[] = [];
  allOrders: Product[][] = [];
  channel = new Subject<{product: Product, action: string, id?: number}>();
  private ordersUrl = 'http://localhost:3000/orders';

  constructor(
    private http: HttpClient
  ) { }

 changeProductList(data) {
    const { action, product, id } = data;
  if (action === 'add') {
    const newProduct = this.shopListProduct.find(item => item.id === product.id);
    newProduct ? newProduct.quantity++ : this.shopListProduct.push(product);
  } else {
      const item = this.shopListProduct.find( productItem => productItem.id === id);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      const index = this.shopListProduct.indexOf(item);
      this.shopListProduct.splice(index, 1);
    }
  }
}

  getShopProducts() {
    return this.shopListProduct;
  }

  changeProduct(data): void {
    this.changeProductList(data);
  }

  getAmount(list) {
    return list.reduce((sumItem, item) => (sumItem + item.price * item.quantity), 0);
  }

  getQuantity(array) {
    return array.reduce((count, item) => (count + item.quantity), 0);
  }

  addOrders(order: Product[]) {
    this.http.post( this.ordersUrl, order)
      .subscribe(response => console.log(response));
  }

  getAllOrders() {
    return this.allOrders;
  }
}

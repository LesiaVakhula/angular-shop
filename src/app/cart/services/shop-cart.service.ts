import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';
import { Subject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  shopListProduct: Product[] = [];
  allOrders: Product[][] = [];
  channel = new Subject<{product: Product, action: string, id?: number}>();

  constructor() { }

 changeArray(obj) {
    const { action, product, id } = obj;
  if (action === 'add') {
    console.log(this.shopListProduct);
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
  console.log(this.shopListProduct);
}

  getShopProducts() {
    console.log(this.shopListProduct);
    return this.shopListProduct;
  }

  changeProduct(obj): void {
    console.log(this.shopListProduct);
    this.changeArray(obj);
  }

  getAmount(array) {
    return array.reduce((sumItem, item) => (sumItem + item.price * item.quantity), 0);
  }

  getQuantity(array) {
    return array.reduce((count, item) => (count + item.quantity), 0);
  }

  addOrders(order: Product[]) {
    this.allOrders.push(order);
  }

  getAllOrders() {
    return this.allOrders;
  }
}

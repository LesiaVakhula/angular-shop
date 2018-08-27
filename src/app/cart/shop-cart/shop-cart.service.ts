import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  channel = new Subject<{product: Product, action: string, id?: number}>();

  constructor() { }

 changeArray(action, productList, product, id?) {
  if (action === 'add') {
    const newProduct = productList.find(item => item.id === product.id);
    newProduct ? newProduct.quantity++ : productList.push(product);
  } else {
      const item = productList.find( productItem => productItem.id === id);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      const index = productList.indexOf(item);
      productList.splice(index, 1);
    }
  }
 }

  changeProduct(obj): void {
    this.channel.next(obj);
  }

  getAmount(array) {
    return array.reduce((sumItem, item) => (sumItem + item.price * item.quantity), 0);
  }

  getQuantity(array) {
    return array.reduce((count, item) => (count + item.quantity), 0);
  }
}

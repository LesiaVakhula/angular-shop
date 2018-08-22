import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  channel = new Subject<Product>();
  channel1 = new Subject<number>();

  constructor() { }

  addProduct(item: Product): void {
    this.channel.next(item);
  }

  getProductCount(item: number) {
    this.channel1.next(item);
  }
}

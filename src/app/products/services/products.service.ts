import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';
import { PRODUCTS } from './products-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductList(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../../shared/product.model';
import { PRODUCTS } from '../../core/data/products-data';

const productsListObservable: Observable<Array<Product>> = of(PRODUCTS);

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductList(): Observable<Product[]> {
    return productsListObservable;
  }

  getProduct(id: number | string): Observable<Product> {
    return this.getProductList()
            .pipe(
              map((products: Product[]) => products.find(product => product.id === +id))
            );
  }
}

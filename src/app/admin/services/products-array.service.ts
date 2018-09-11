import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../core/data/products-data';
import { Product } from '../../shared/product.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsArrayService {
  // allProductsList: Product[];
  allProductsList = PRODUCTS;
  constructor() {
  }

  getAllProducts(): Observable<Product[]> {
    return of(this.allProductsList);
  }

  getProduct(id: number): Observable<Product> {
    return this.getAllProducts()
                .pipe(
                  map((products: Product[]) => products.find(product => product.id === +id) )
                );
  }

  changeListProduct(product: Product) {
    const products = this.allProductsList;
    const index = products.findIndex(item => item.id === product.id);
    if ( index > -1) {
      products.splice(index, 1, product);
    } else {
      products.push(product);
    }
    this.allProductsList = {...products};
    console.log(this.allProductsList);
  }

  // updateProduct(product: Product) {

  // }
}

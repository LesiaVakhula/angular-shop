import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../../shared/product.model';
// import { ProductsArrayService } from '../services/products-array.service';
// import { map, take, catchError } from 'rxjs/operators';
import { ProductPromiseService } from '../../core/services';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {

  constructor(
    private router: Router,
    // private productsArrayService: ProductsArrayService
    private productPromiseService: ProductPromiseService
  ) {}

  // resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
  resolve(route: ActivatedRouteSnapshot): Promise<Product | null> {
    console.log('UserResolve Guard started');

    if (!route.paramMap.has('productID')) {
      // return of({
      return Promise.resolve({
        name: '',
        price: null,
        id: null,
        description: '',
        isAvailable: false,
        category: ProductCategory.any,
        imgUrl: '',
        quantity: null
      });
    }

    const id = +route.paramMap.get('productID');

    // return this.productsArrayService.getProduct(id).pipe(
    //   map(product => {
    //     if (product) {
    //     return product;
    //     } else {
    //       this.router.navigate(['/allproducts']);
    //       return null;
    //     }
    //   }),
    //   take(1),
    //   catchError(() => {
    //     this.router.navigate(['/allproducts']);
    //     return of(null);
    //   })
    // );

    return this.productPromiseService.getProduct(id)
              .then((product) => {
                if (product) {
                  return product;
                  } else {
                    this.router.navigate(['/allproducts']);
                    return null;
                  }
              })
              .catch(() => {
                    this.router.navigate(['/allproducts']);
                    return null;
               });
  }
}

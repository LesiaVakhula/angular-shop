import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../services/products.service';
import { ShopCartService } from '../../../cart/services/shop-cart.service';
import { Product } from '../../../shared/product.model';
import { ProductPromiseService } from '../../../core/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // productList$: Observable<Product[]>;
  productList: Promise<Product[]>;
  product: Product;

  constructor(
    // private productsService: ProductsService,
    private shopCartService: ShopCartService,
    private productPromiseService: ProductPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList(): void {
    // this.productList$ = this.productsService.getProductList();
    this.productList = this.productPromiseService.getProducts();
  }

  buyProduct(obj): void {
    console.log('from product-list', obj);
    this.shopCartService.changeProduct(obj);
  }

  getProductDetails(product: Product) {
    // const link = ['product', product.id];
    const link = [ {outlets: {primary: ['product', product.id],  feedback: ['feedback'] }} ];
    this.router.navigate(link, {relativeTo: this.route});
  }

}

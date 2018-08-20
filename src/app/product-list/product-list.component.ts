import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';
import { ShopCartService } from '../cart/shop-cart.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(
    private productsService: ProductsService,
    private shopCartService: ShopCartService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList(): void {
    this.productList = this.productsService.getProductList();
  }
  buyProduct(product: Product): void {
    this.shopCartService.addProduct(product);
  }

}

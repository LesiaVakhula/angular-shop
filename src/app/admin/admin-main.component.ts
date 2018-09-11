import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../core/data/products-data';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  allProductsList = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

  getAllProducts() {
    return this.allProductsList;
  }

  // changeListProduct(product: Product) {
  //   const products = this.getAllProducts();
  //   const index = products.findIndex(item => item.id === product.id);
  //   if ( index > -1) {
  //     products.splice(index, 1, product);
  //   } else {
  //     products.push(product);
  //   }
  //   this.allProductsList = {...products};
  // }
}

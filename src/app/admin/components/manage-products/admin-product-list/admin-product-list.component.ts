import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../../shared/product.model';
import { ProductsArrayService } from '../../../services/products-array.service';
import { Observable } from 'rxjs';
import { ProductPromiseService } from '../../../../core/services';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  allProducts: Product[];
  constructor(
    // private productsArrayService: ProductsArrayService,
    private productPromiseService: ProductPromiseService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.productPromiseService.getProducts()
      .then((products: Product[]) => this.allProducts = products)
      .catch(err => console.log(err));
    // this.productsArrayService.getAllProducts()
    //   .subscribe(products => this.allProducts = products);
  }

  onEditProduct(id: number) {
    const link = ['./editproduct', id];
    this.router.navigate(link, {relativeTo: this.route});
  }

  onDeleteProduct(product: Product) {
    this.productPromiseService.deleteProduct(product)
      .then(() => this.allProducts = this.allProducts.filter(item => item.id !== product.id))
      .catch(err => console.log('Ups... trouble with delete product?...', err));
  }
}

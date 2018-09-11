import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../../shared/product.model';
import { ProductsArrayService } from '../../../services/products-array.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  allProducts: Observable<Product[]>;
  constructor(
    private productsArrayService: ProductsArrayService,
    private router: Router,
    private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {
    this.allProducts = this.productsArrayService.getAllProducts();
  }

  onEditProduct(id: number) {
    // this.location.back;
    const link = ['./editproduct', id];
    this.router.navigate(link, {relativeTo: this.route});
  }
}

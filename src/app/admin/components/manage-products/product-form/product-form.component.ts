import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';
import { ProductsArrayService } from '../../../services/products-array.service';
import { Product } from '../../../../shared/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsArrayService: ProductsArrayService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.
    pipe(
      switchMap((params: Params) => this.productsArrayService.getProduct(+params.get('productID')))
    )
    .subscribe(product => (this.product = product), err => console.log(err));
 }

 onSaveProduct() {
   this.productsArrayService.changeListProduct(this.product);
   this.goBack();
 }
 goBack() {
  this.location.back();
 }
}


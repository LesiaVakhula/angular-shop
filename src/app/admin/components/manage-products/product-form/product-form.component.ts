import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';
import { ProductsArrayService } from '../../../services/products-array.service';
import { Product } from '../../../../shared/product.model';
import { ProductPromiseService } from '../../../../core/services';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, AfterViewInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    // private productsArrayService: ProductsArrayService,
    private productPromiseService: ProductPromiseService,
    private location: Location
  ) { }

  @ViewChild('productId')
    inputField: ElementRef;

  @ViewChild('saveBtn')
   saveBtn: ElementRef;

  @ViewChild('addBtn')
    addBtn: ElementRef;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = { ...data.product };
    });
 }

 ngAfterViewInit() {
  if (!this.product.id) {
    this.inputField.nativeElement.disabled = false;
    this.addBtn.nativeElement.hidden = false;
    this.saveBtn.nativeElement.hidden = true;
  } else {
    this.inputField.nativeElement.disabled = true;
    this.addBtn.nativeElement.hidden = true;
    this.saveBtn.nativeElement.hidden = false;
  }
 }

 onSaveProduct() {
   this.productPromiseService.updateListProduct(this.product)
    .then(() => this.goBack());
  // localStorage.setItem('product', JSON.stringify(this.product));
  // const link = ['allproducts'];
  // this.router.navigate(link,);
  //  this.goBack();
 }

 onAddProduct() {
  this.productPromiseService.addProduct(this.product)
  .then(() => this.goBack());
 }

 goBack() {
  this.location.back();
 }
}


import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../core/data/products-data';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

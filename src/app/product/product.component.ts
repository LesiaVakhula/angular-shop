import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/product.model';
import { ShopCartService } from '../cart/shop-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productData: Product;
  productCategory: string;

  constructor(private shopCartService: ShopCartService) { }

  ngOnInit() {
    switch (this.productData.category) {
      case 1: this.productCategory = 'Book';
        break;
      case 2: this.productCategory = 'Pen';
        break;
      case 3: this.productCategory = 'Pencil';
    }
  }

  onBuy() {
    console.log(`Congratulation! You've bought the ${this.productData.name}!!!`);
    this.shopCartService.addProduct(this.productData);
  }

}

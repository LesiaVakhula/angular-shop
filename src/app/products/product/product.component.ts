import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductCategory } from '../../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productData: Product;
  @Output() buyOneProduct: EventEmitter<Product> = new EventEmitter<Product>();
  productCategory: string;

  constructor() { }

  ngOnInit() {
    switch (this.productData.category) {
      case ProductCategory.book: this.productCategory = 'Book';
        break;
      case ProductCategory.pen: this.productCategory = 'Pen';
        break;
      case ProductCategory.pencil: this.productCategory = 'Pencil';
    }
  }

  onBuy() {
    console.log(`Congratulation! You've bought the ${this.productData.name}!!!`);
    this.buyOneProduct.emit(this.productData);
  }

}

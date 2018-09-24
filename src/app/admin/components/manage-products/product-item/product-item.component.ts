import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/product.model';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.editProduct.emit(this.product.id);
  }

  delete() {
    this.deleteProduct.emit(this.product);
  }
}

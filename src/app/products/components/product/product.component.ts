import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductCategory } from '../../../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productData: Product;
  @Output() buyOneProduct: EventEmitter<{product?: Product, action: string, id?: number}> =
                          new EventEmitter<{product?: Product, action: string, id?: number}>();

  constructor( ) { }

  ngOnInit() { }

  onBuy() {
    console.log(`Congratulation! You've bought the ${this.productData.name}!!!`);
    this.buyOneProduct.emit({ product: this.productData, action: 'add'});
  }

}

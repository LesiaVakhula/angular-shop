import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShopCartService } from '../shop-cart/shop-cart.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.css'],
})
export class ShopCartItemComponent implements OnInit {
  @Input() productItem: Product;
  @Output() deleteItem: EventEmitter<{product?: Product, action: string, id?: number}> =
                        new EventEmitter<{product?: Product, action: string, id?: number}>();
  date: number;

  ngOnInit() {
    this.date = Date.now();
  }

  deleteProduct(obj) {
    this.deleteItem.emit(obj);
  }

}

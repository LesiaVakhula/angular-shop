import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShopCartService } from '../shop-cart/shop-cart.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartItemComponent implements OnInit {
  @Input() productItem: Product;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor( private shopCartService: ShopCartService) { }

  ngOnInit() {
  }

  deleteProduct(id: number) {
    this.deleteItem.emit(id);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { OrderByPipe } from '../../../shared/pipes/order-by.pipe';
import { ShopCartService } from '../../services/shop-cart.service';
import { Product } from '../../../shared/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})
export class ShopCartComponent implements OnInit {
  @Input() productListCart: Product[];
  @Input() quantity: number;
  @Input() sum: number;
  @Output() confirmOrder: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onConfirm() {
    this.router.navigate(['/createorder']);
    this.confirmOrder.emit('ok');
  }
  goBack() {
    this.location.back();
  }
}

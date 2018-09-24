import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderManageService } from '../../../../core/services';
import { Product } from '../../../../shared/product.model';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements OnInit, OnDestroy {
  orders: Product[][];
  sub: Subscription;
  constructor(
    private orderManageService: OrderManageService
  ) { }

  ngOnInit() {
    this.sub = this.orderManageService.getOrders()
      .subscribe((orders: Product[][]) => this.orders = orders);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

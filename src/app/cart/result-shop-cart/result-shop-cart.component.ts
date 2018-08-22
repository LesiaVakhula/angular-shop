import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopCartComponent } from '../shop-cart/shop-cart.component';
import { ShopCartService } from '../shop-cart/shop-cart.service';

@Component({
  selector: 'app-result-shop-cart',
  templateUrl: './result-shop-cart.component.html',
  styleUrls: ['./result-shop-cart.component.css']
})
export class ResultShopCartComponent implements OnInit {
  @Input() quantity: number;
  @Input() totalSum: number;
  constructor(private shopCartServise: ShopCartService) { }

  ngOnInit() {
  }

}

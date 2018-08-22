import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ShopCartItemComponent } from './shop-cart-item/shop-cart-item.component';
import { ResultShopCartComponent } from './result-shop-cart/result-shop-cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShopCartComponent,
    ShopCartItemComponent,
    ResultShopCartComponent
  ],
  exports: [
    ShopCartComponent,
    ResultShopCartComponent
  ]
})
export class CartModule { }

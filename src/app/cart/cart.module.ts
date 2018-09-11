import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ShopCartItemComponent } from './components/shop-cart-item/shop-cart-item.component';
import { ResultShopCartComponent } from './components/result-shop-cart/result-shop-cart.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ShopCartComponent,
    ShopCartItemComponent,
    ResultShopCartComponent,
    CartComponent
  ],
  exports: [
    ShopCartComponent,
    ResultShopCartComponent,
    CartComponent
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ShopCartComponent } from './cart/components/shop-cart/shop-cart.component';
import { ProductComponent } from './products/components/product/product.component';
import { CartComponent } from './cart/cart.component';
import { AdminMainComponent } from './admin/admin-main.component';
import { LoginComponent } from './core/components/login/login.component';
import { ProcessOrderComponent } from './core/components/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'shopcart',
    component: CartComponent,
  },
  {
    path: 'createorder',
    component: ProcessOrderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

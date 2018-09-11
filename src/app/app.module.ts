import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { ContuctUsComponent } from './contuct-us/contuct-us.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { AdminModule } from './admin/admin.module';
import { CartComponent } from './cart/cart.component';
import { AdminOrderListComponent } from './admin/components/manage-orders/admin-order-list/admin-order-list.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ContuctUsComponent,
    AdminOrderListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ProductsModule,
    // CartModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }

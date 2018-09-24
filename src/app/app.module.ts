import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminOrderListComponent } from './admin/components/manage-orders/admin-order-list/admin-order-list.component';

import { TimingInterceptor } from './core/interceptors/timing.interseptor';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AdminOrderListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ProductsModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }

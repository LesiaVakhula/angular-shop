import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { ContuctUsComponent } from './contuct-us/contuct-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ContuctUsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

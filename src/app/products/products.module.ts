import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ProductComponent,
  ProductDetailsComponent,
  ProductFeedbackComponent,
  ProductListComponent,
  ProductsComponent,
} from '.';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductFeedbackComponent
  ],
  exports: [ProductListComponent],
})
export class ProductsModule { }

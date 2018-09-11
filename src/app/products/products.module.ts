import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryPipe } from '../pipe/category.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';
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
    CategoryPipe,
    ProductDetailsComponent,
    ProductFeedbackComponent
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

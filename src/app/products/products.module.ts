import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryPipe } from '../pipe/category.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    CategoryPipe
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

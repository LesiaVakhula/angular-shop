import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main.component';
import { AdminProductListComponent } from './components/manage-products/admin-product-list/admin-product-list.component';
import { ProductItemComponent } from './components/manage-products/product-item/product-item.component';
import { ProductFormComponent } from './components/manage-products/product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminMainComponent,
    AdminProductListComponent,
    ProductItemComponent,
    ProductFormComponent
  ]
})
export class AdminModule { }

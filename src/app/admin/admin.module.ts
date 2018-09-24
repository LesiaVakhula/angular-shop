import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main.component';
import { AdminProductListComponent } from './components/manage-products/admin-product-list/admin-product-list.component';
import { ProductItemComponent } from './components/manage-products/product-item/product-item.component';
import { ProductFormComponent } from './components/manage-products/product-form/product-form.component';
import { ProductResolveGuard } from './guards/product-resolve.guard';
import { SharedModule } from '../shared/shared.module';

// import { CategoryPipe  } from '../pipe/category.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminMainComponent,
    AdminProductListComponent,
    ProductItemComponent,
    ProductFormComponent,
  ],
  providers: [
    ProductResolveGuard
  ]
})
export class AdminModule { }

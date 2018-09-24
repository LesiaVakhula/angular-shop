import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main.component';
import { ProductFormComponent } from './components/manage-products/product-form/product-form.component';
import { AdminProductListComponent } from './components/manage-products/admin-product-list/admin-product-list.component';
import { AdminOrderListComponent } from './components/manage-orders/admin-order-list/admin-order-list.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'allproducts',
        children: [
          {
            path: 'editproduct/:productID',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          {
            path: 'add',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          },
          {
            path: '',
            component: AdminProductListComponent
          }
        ]
      },
      {
        path: 'allorders',
        component: AdminOrderListComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

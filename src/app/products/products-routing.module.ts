import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'product/:productID',
        component: ProductDetailsComponent
      },
      {
        path: 'feedback',
        component: ProductFeedbackComponent,
        outlet: 'feedback'
      },
      {
        path: '',
        component: ProductListComponent
      },
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

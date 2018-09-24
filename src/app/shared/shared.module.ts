import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { StyleItemShopDirective } from './style-item-shop.directive';
import { ChangeStylesDirective } from './directives/change-styles.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule,
    StyleItemShopDirective,
    ChangeStylesDirective,
    OrderByPipe,
    CategoryPipe
  ],
  declarations: [
    StyleItemShopDirective,
    ChangeStylesDirective,
    OrderByPipe,
    CategoryPipe
  ]
})
export class SharedModule { }

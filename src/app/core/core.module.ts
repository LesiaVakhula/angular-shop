import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken } from '@angular/core';

import { GeneratorSequence, SequenceGeneratorFactory } from './services/sequence-generator.factory';
import { LoginComponent } from './components/login/login.component';
import {
  ProductPromiseService,
  OrderManageService
  } from './services';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

const Constants_Service = { App: 'TaskManager', Ver: '1.0' };
const ConstantsService = new InjectionToken<{}>('ConstantsService');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, ProcessOrderComponent],
  providers: [
    ProductPromiseService,
    OrderManageService,
    { provide: ConstantsService, useValue: Constants_Service},
    { provide: GeneratorSequence, useFactory: SequenceGeneratorFactory(5)}
  ]
})
export class CoreModule { }

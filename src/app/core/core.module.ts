import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InjectionToken } from '@angular/core';

import { GeneratorSequence, SequenceGeneratorFactory } from './services/sequence-generator.factory';
import { LoginComponent } from './components/login/login.component';
import {
  ProductPromiseService,
  OrderManageService
  } from './services';

const Constants_Service = { App: 'TaskManager', Ver: '1.0' };
const ConstantsService = new InjectionToken<{}>('ConstantsService');

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [
    ProductPromiseService,
    OrderManageService,
    { provide: ConstantsService, useValue: Constants_Service},
    { provide: GeneratorSequence, useFactory: SequenceGeneratorFactory(5)}
  ]
})
export class CoreModule { }

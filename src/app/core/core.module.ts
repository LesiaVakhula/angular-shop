import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionToken } from '@angular/core';

import { GeneratorSequence, SequenceGeneratorFactory } from './services/sequence-generator.factory';

const Constants_Service = { App: 'TaskManager', Ver: '1.0' };
const ConstantsService = new InjectionToken<{}>('ConstantsService');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: ConstantsService, useValue: Constants_Service},
    { provide: GeneratorSequence, useFactory: SequenceGeneratorFactory(5)}
  ]
})
export class CoreModule { }

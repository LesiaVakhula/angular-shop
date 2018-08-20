import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

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
    MatTableModule
  ],
  declarations: []
})
export class SharedModule { }

import { Injectable } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { ConfigObj } from '../config.model';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private config: ConfigObj;

  constructor() { }

  getConfig() {
    return this.config;
  }

  setConfig(object: ConfigObj) {
    this.config = {...object};
  }
}

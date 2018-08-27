import { Injectable } from '@angular/core';
import { CoreModule } from '../../core/core.module';


@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

  constructor() { }

  setItem(item, value) {
    localStorage.setItem(item, value);
  }

  getItem(item) {
    localStorage.getItem(item);
  }

  removeItem(item) {
    localStorage.removeItem(item);
  }
}

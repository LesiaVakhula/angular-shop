import { Injectable } from '@angular/core';
import { CoreModule } from '../../core/core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private _id: number;
  private _login: string;
  private _email: string;

  constructor() { }

  getConfig() {
    return {
      id: this._id,
      login: this._login,
      email: this._email
    };
  }

  setConfig(id: number, login: string, email: string) {
    this._id = id;
    this._login = login;
    this._email = email;
  }
}

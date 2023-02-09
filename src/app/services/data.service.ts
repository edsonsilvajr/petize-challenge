import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: User | null = null;

  constructor() {}

  public setData(data: User) {
    this._data = data;
  }

  public getData() {
    return this._data;
  }
}

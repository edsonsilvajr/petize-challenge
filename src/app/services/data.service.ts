import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: any; //TODO: criar modelo

  constructor() {}

  setDate(data: any) {
    this._data = data;
  }

  getDate(data: any) {
    return this._data;
  }
}

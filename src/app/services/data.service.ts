import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: any; //TODO: criar modelo

  constructor() {}

  setData(data: any) {
    this._data = data;
  }

  getData(data: any) {
    return this._data;
  }
}

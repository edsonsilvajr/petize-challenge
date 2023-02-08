import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: any; //TODO: criar modelo

  constructor() {}

  public setData(data: any) {
    this._data = data;
  }

  public getData() {
    return this._data;
  }
}

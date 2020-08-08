import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { GLOBAL } from './global'


@Injectable()
export class ProductsService {
    public url: string;
    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url
    }
    getProduct() {
        return this._http.get(this.url + 'productos').map(res => (res))
    }
    addProductCar(id) {
        return this._http.get(this.url + 'carritoAdd/' + id).map(res => (res))
    }
}
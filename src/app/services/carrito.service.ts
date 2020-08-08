import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { GLOBAL } from './global'


@Injectable()
export class CarService {
    public url: string;
    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url
    }
    getProductCar() {
        return this._http.get(this.url + 'carrito').map(res => (res))
    }
    deleteProductCar(id) {
        return this._http.get(this.url + 'carritodelete/' + id).map(res => (res))
    }
}
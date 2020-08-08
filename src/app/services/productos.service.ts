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
    //Se encarga de realizar la petición get al servicio, obtiene los productos
    getProduct() {
        return this._http.get(this.url + 'productos').map(res => (res))
    }
    //Se encarga de realizar la petición get al servicio, agrega los productos al carrito
    addProductCar(id) {
        return this._http.get(this.url + 'carritoAdd/' + id).map(res => (res))
    }
}
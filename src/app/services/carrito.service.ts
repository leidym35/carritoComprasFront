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
    //Se encarga de realizar la petición get al servicio, obtiene los productos que estan en el carrito
    getProductCar() {
        return this._http.get(this.url + 'carrito').map(res => (res))
    }
    //Se encarga de realizar la petición get al servicio, elimina un producto por id
    deleteProductCar(id) {
        return this._http.get(this.url + 'carritodelete/' + id).map(res => (res))
    }
}
import { Component } from '@angular/core';
import { CarService } from '../services/carrito.service'

@Component({
    selector: 'carrito',
    templateUrl: '../views/carrito.html',
    providers: [CarService]
})
export class CarComponent {
    public title: string;
    public products: object
    constructor(
        private _carService: CarService
    ) {
        this.title = 'Productos Agregados Al Carrito';
    }
    //Permite mostrar los productos cuando la pagina cargue
    ngOnInit() {
        this.getListCar()
    }
    /*  La siguiente Funcion llama el servicio CarService y accede a getProductCar permite
        listar los productos que se encuentran en el carrito */
    getListCar() {
        this._carService.getProductCar().subscribe(
            result => {
                this.products = result
            },
            error => {
                console.log(<any>error);
            }
        );
    }
    /*  La siguiente Funcion llama el servicio CarService y accede deleteProductCar permite
        eliminar los productos que se encuentran en el carrito por id */
    onDelete(id) {
        this._carService.deleteProductCar(id).subscribe(
            response => {
                this.getListCar()
            },
            error => {
                this.getListCar()
                console.log(<any>error);
            }
        )
    }
}
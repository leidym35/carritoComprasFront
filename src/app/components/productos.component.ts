import { Component } from '@angular/core';
import { ProductsService } from '../services/productos.service'
@Component({
  selector: 'productos',
  templateUrl: '../views/productos.html',
  providers: [ProductsService]
})
export class ProductsComponent {
  public title: string;
  public products: object
  constructor(
    private _productsService: ProductsService
  ) {
    this.title = 'Productos';
  }
  ngOnInit() {
    this.getListProducts()
  }
  /*  La siguiente Funcion llama el servicio _productsService y accede a getProduct permite
      listar los productos */
  getListProducts() {
    this._productsService.getProduct().subscribe(
      result => {
        this.products = result
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  /*  La siguiente Funcion llama el servicio _productsService y accede a addProductCar permite
      agregar productos al carrito */
  onAdd(id) {
    this._productsService.addProductCar(id).subscribe(
      response => {
      },
      error => {
        console.log(error);
      }
    )
  }
}
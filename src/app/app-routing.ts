import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { ProductsComponent } from './components/productos.component';
import { CarComponent } from './components/carrito.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
  { path: 'productos', component: ProductsComponent }, 
  { path: 'carrito', component: CarComponent },
  { path: 'home', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
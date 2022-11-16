import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarHotelComponent } from './components/hotel/actualizar-hotel/actualizar-hotel.component';
import { CrearHotelComponent } from './components/hotel/crear-hotel/crear-hotel.component';
import { MostrarHotelComponent } from './components/hotel/mostrar-hotel/mostrar-hotel.component';
import { MostrarAgenciaComponent } from './components/agencia/mostrar-agencia/mostrar-agencia.component';
import { MostrarCategoriaComponent } from './components/categoria/mostrar-categoria/mostrar-categoria.component';
import { MostrarReservaComponent } from './components/reserva/mostrar-reserva/mostrar-reserva.component';
import { CrearReservaComponent } from './components/reserva/crear-reserva/crear-reserva.component';
import { CrearCategoriaComponent } from './components/categoria/crear-categoria/crear-categoria.component';
import { CrearAgenciaComponent } from './components/agencia/crear-agencia/crear-agencia.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full'
  },
  { path: "hotels", component: MostrarHotelComponent },
  { path: "addhotels", component: CrearHotelComponent },
  { path: "hotels/edit/:id", component: ActualizarHotelComponent },

  { path: "agencia", component: MostrarAgenciaComponent },
  { path: "addagencia", component: CrearAgenciaComponent },

  { path: "reserva", component: MostrarReservaComponent },
  { path: "addreserva", component: CrearReservaComponent },
  
  { path: "categoria", component: MostrarCategoriaComponent },
  { path: "addcategoria", component: CrearCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




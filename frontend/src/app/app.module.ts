import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarHotelComponent } from './components/hotel/mostrar-hotel/mostrar-hotel.component';
import { CrearHotelComponent } from './components/hotel/crear-hotel/crear-hotel.component';
import { ActualizarHotelComponent } from './components/hotel/actualizar-hotel/actualizar-hotel.component';
import { EliminarHotelComponent } from './components/hotel/eliminar-hotel/eliminar-hotel.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MostrarAgenciaComponent } from './components/agencia/mostrar-agencia/mostrar-agencia.component';
import { CrearAgenciaComponent } from './components/agencia/crear-agencia/crear-agencia.component';

import { EliminarAgenciaComponent } from './components/agencia/eliminar-agencia/eliminar-agencia.component';
import { MostrarReservaComponent } from './components/reserva/mostrar-reserva/mostrar-reserva.component';
import { CrearReservaComponent } from './components/reserva/crear-reserva/crear-reserva.component';

import { MostrarCategoriaComponent } from './components/categoria/mostrar-categoria/mostrar-categoria.component';
import { CrearCategoriaComponent } from './components/categoria/crear-categoria/crear-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MostrarHotelComponent,
    CrearHotelComponent,
    ActualizarHotelComponent,
    EliminarHotelComponent,
    MostrarAgenciaComponent,
    CrearAgenciaComponent,
    EliminarAgenciaComponent,
    MostrarReservaComponent,
    CrearReservaComponent,
    MostrarCategoriaComponent,
    CrearCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

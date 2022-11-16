import { Component, OnInit } from '@angular/core';
import { HotelesI } from 'src/app/models/hotels';
import { Router } from '@angular/router';
import { HotelService } from '../../../services/hotel.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-hotel',
  templateUrl: './mostrar-hotel.component.html',
  styleUrls: ['./mostrar-hotel.component.css']
})
export class MostrarHotelComponent implements OnInit {
  public hotels:any[] = []
  public msgs1: Message[]=[];
  public displayedColumns: string[] = ["id", "nombreHotel", "direccionHotel", "telefonoHotel", "correoHotel","Acciones"]
  constructor(
    private hotelService: HotelService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarHotels()
  }

  mostrarHotels() {
    this.hotelService.getAllHotel().subscribe(
      data => {
        this.hotels[0]=(data)
        console.log(data)
      }
    )
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/hotels');
    this.hotelService.deleteHotel(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Hotel Eliminado', life:5000});
        this.mostrarHotels();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/hotels');

      }
    );
  }

  imprimir(id: number){

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-reserva',
  templateUrl: './mostrar-reserva.component.html',
  styleUrls: ['./mostrar-reserva.component.css']
})
export class MostrarReservaComponent implements OnInit {
  public reserva:any[] = []
  public msgs1: Message[]=[];
  public displayedColumns: string[] = ["id", "cedulaReserva", "nitavReserva", "fechaingresoReserva", "fechasalidaReserva", "horaingresoReserva","personas","agencia","hotel"]
  constructor(
    private reservaservice: ReservaService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarReserva()
  }

  mostrarReserva() {
    this.reservaservice.getAllReserva().subscribe(
      data => {
        this.reserva[0]=(data)
        console.log(data)
      }
    )
  }

}

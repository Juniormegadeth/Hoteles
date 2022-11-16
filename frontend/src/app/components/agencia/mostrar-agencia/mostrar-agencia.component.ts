import { Component, OnInit } from '@angular/core';
import { AgenciaI } from 'src/app/models/agancia';
import { Router } from '@angular/router';
import { AgenciaService } from 'src/app/services/agencia.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-agencia',
  templateUrl: './mostrar-agencia.component.html',
  styleUrls: ['./mostrar-agencia.component.css']
})
export class MostrarAgenciaComponent implements OnInit {
  public agencia: any[] = []
  public msgs1: Message[]=[];
  public displayedColumns: string[] = ["id", "nombreAgencia", "direccionAgencia", "telefonoAgencia", "ciudadAgencia","Acciones"]
  constructor(
    private agenciaService: AgenciaService,
    private router: Router,
    private messageService: MessageService
    
  ) { }

  ngOnInit(): void {
    this.mostrarAgencia()
  }

  mostrarAgencia() {
    this.agenciaService.getAllAgencia().subscribe(
      data => {
        this.agencia[0]=(data)
        console.log(data)
      }
    )
  }
}

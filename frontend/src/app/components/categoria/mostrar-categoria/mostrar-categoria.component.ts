import { Component, OnInit } from '@angular/core';
import { CategoriaI } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import {Message,MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-categoria',
  templateUrl: './mostrar-categoria.component.html',
  styleUrls: ['./mostrar-categoria.component.css']
})
export class MostrarCategoriaComponent implements OnInit {
  public categoria: any[] = []
  public msgs1: Message[]=[];
  public displayedColumns: string[] = ["id", "nombre","Acciones"]
  constructor(
    private categoriaservice: CategoriaService,
    private router: Router,
    private messageService: MessageService
    
  ) { }

  ngOnInit(): void {
    this.mostrarCategoria()
  }

  mostrarCategoria() {
    this.categoriaservice.getAllCategoria().subscribe(
      data => {
        this.categoria[0]=(data)
        console.log(data)
      }
    )
  }
}

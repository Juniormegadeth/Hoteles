import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelesI } from 'src/app/models/hotels';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.component.html',
  styleUrls: ['./crear-hotel.component.css']
})
export class CrearHotelComponent implements OnInit {

  public form:FormGroup=this.formBuilder.group({
    nombreHoteles: ['', [Validators.required]],
    direccionHoteles: ['', [Validators.required]],
    telefonoHoteles: ['', [Validators.required]],
    año: ['', [Validators.required]],
    tipocategoria: ['', [Validators.required]],
    tipohabitacion: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private messageService: MessageService,

    private router: Router,
  ) { }

  ngOnInit(): void {

  }
  
  onSubmit(): void {
    const formValue: HotelesI = this.form.value;
    console.log(formValue);
    this.hotelService.createHotel(formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Creado', life:5000});
     }, 0);
        this.router.navigateByUrl('create');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/hotels');
  }
  get nombreHoteles() { return this.form.get('nombreHoteles'); }
  get direccionHoteles() { return this.form.get('direccionHoteles'); }
  get telefonoHoteles() { return this.form.get('telefonoHoteles'); }
  get año() { return this.form.get('año'); }
  get tipocategoria() { return this.form.get('tipocategoria'); }
  get tipohabitacion() { return this.form.get('tipohabitacion'); }
}

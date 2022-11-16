import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelesI } from 'src/app/models/hotels';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-actualizar-hotel',
  templateUrl: './actualizar-hotel.component.html',
  styleUrls: ['./actualizar-hotel.component.css']
})
export class ActualizarHotelComponent implements OnInit {
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    nombreHoteles: ['', [Validators.required]],
    direccionHoteles: ['', [Validators.required]],
    telefonoHoteles: ['', [Validators.required]],
    tipocategoria: ['', [Validators.required]],
    tipohabitacion: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHotel(this.id);

  }

  
  getHotel(id: number){
    this.hotelService.getOneHotel(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.hotel)
        // console.log(data.hotel)
      }
    })
  }


  onSubmit(): void {
    const formValue: HotelesI = this.form.value;
    const id: number =  this.form.value.id
    this.hotelService.updateHotel(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Hotel Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('hotels');

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
  get tipocategoria() { return this.form.get('tipocategoria'); }
  get tipohabitacion() { return this.form.get('tipohabitacion'); }

}


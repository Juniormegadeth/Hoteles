import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';
import { ReservaI } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  public form:FormGroup=this.formBuilder.group({
    cedulaReserva: ['', [Validators.required]],
    nitavReserva: ['', [Validators.required]],
    fechaingresoReserva: ['', [Validators.required]],
    fechasalidaReserva: ['', [Validators.required]],
    horaingresoReserva: ['', [Validators.required]],
    personas: ['', [Validators.required]],
    agencia: ['', [Validators.required]],
    hotel: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private reservaservice: ReservaService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const formValue: ReservaI = this.form.value;
    console.log(formValue);
    this.reservaservice.createReserva(formValue).subscribe(
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
    this.router.navigateByUrl('/reserva');
  }
  get cedulaReserva() { return this.form.get('cedulaReserva'); }
  get nitavReserva() { return this.form.get('nitavReserva'); }
  get fechaingresoReserva() { return this.form.get('fechaingresoReserva'); }
  get fechasalidaReserva() { return this.form.get('fechasalidaReserva'); }
  get horaingresoReserva() { return this.form.get('horaingresoReserva'); }
  get personas() { return this.form.get('personas'); }
  get agencia() { return this.form.get('agencia'); }
  get hotel() { return this.form.get('hotel'); }

}


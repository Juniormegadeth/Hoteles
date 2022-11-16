import { Component, OnInit } from '@angular/core';
import { AgenciaI } from 'src/app/models/agancia';
import { AgenciaService } from 'src/app/services/agencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-agencia',
  templateUrl: './crear-agencia.component.html',
  styleUrls: ['./crear-agencia.component.css']
})
export class CrearAgenciaComponent implements OnInit {
  public form: FormGroup = this.formBuilders.group(
    {
      nombreAgencia: ['', [Validators.required]],
      direccionAgencia: ['', [Validators.required]],
      telefonoAgencia: ['', [Validators.required]],
      ciudadAgencia: ['', [Validators.required]]
    }
  )

  constructor(
    private formBuilders: FormBuilder,
    private agenciaService: AgenciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue: AgenciaI = this.form.value
    this.agenciaService.createAgencia(formValue).subscribe(
      () => {
        this.router.navigateByUrl('/agencia')
      }
    )
  }
  cancel(){
    this.router.navigateByUrl('/agencia');
  }

  get nombreAgencia() { return this.form.get('nombreAgencia'); }
  get direccionAgencia() { return this.form.get('direccionAgencia'); }
  get telefonoAgencia() { return this.form.get('telefonoAgencia'); }
  get ciudadAgencia() { return this.form.get('ciudadAgencia'); }
}

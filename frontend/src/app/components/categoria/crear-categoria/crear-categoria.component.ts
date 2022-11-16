import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaI } from 'src/app/models/categoria';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  public form: FormGroup = this.formBuilders.group(
    {
      nombre: ['', [Validators.required]]
    }
  )

  constructor(
    private formBuilders: FormBuilder,
    private categoriaservice: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue: CategoriaI = this.form.value
    this.categoriaservice.createCategoria(formValue).subscribe(
      () => {
        this.router.navigateByUrl('/categoria')
      }
    )
  }
  cancel(){
    this.router.navigateByUrl('/categoria');
  }

  get nombre() { return this.form.get('nombre'); }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCategoriaComponent } from './mostrar-categoria.component';

describe('MostrarCategoriaComponent', () => {
  let component: MostrarCategoriaComponent;
  let fixture: ComponentFixture<MostrarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAgenciaComponent } from './mostrar-agencia.component';

describe('MostrarAgenciaComponent', () => {
  let component: MostrarAgenciaComponent;
  let fixture: ComponentFixture<MostrarAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAgenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgenciaComponent } from './crear-agencia.component';

describe('CrearAgenciaComponent', () => {
  let component: CrearAgenciaComponent;
  let fixture: ComponentFixture<CrearAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReservaComponent } from './mostrar-reserva.component';

describe('MostrarReservaComponent', () => {
  let component: MostrarReservaComponent;
  let fixture: ComponentFixture<MostrarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

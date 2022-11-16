import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAgenciaComponent } from './eliminar-agencia.component';

describe('EliminarAgenciaComponent', () => {
  let component: EliminarAgenciaComponent;
  let fixture: ComponentFixture<EliminarAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAgenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

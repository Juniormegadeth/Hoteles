import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarHotelComponent } from './mostrar-hotel.component';

describe('MostrarHotelComponent', () => {
  let component: MostrarHotelComponent;
  let fixture: ComponentFixture<MostrarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

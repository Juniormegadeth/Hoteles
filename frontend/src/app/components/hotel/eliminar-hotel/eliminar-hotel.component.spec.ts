import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHotelComponent } from './eliminar-hotel.component';

describe('EliminarHotelComponent', () => {
  let component: EliminarHotelComponent;
  let fixture: ComponentFixture<EliminarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudComponent } from './lista-solicitud.component';

describe('ListaSolicitudComponent', () => {
  let component: ListaSolicitudComponent;
  let fixture: ComponentFixture<ListaSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTratamientoComponent } from './lista-tratamiento.component';

describe('ListaTratamientoComponent', () => {
  let component: ListaTratamientoComponent;
  let fixture: ComponentFixture<ListaTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTratamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

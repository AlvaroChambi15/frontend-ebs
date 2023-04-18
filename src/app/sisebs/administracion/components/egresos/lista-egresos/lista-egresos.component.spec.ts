import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEgresosComponent } from './lista-egresos.component';

describe('ListaEgresosComponent', () => {
  let component: ListaEgresosComponent;
  let fixture: ComponentFixture<ListaEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

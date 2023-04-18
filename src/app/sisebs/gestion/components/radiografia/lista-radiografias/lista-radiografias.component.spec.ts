import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRadiografiasComponent } from './lista-radiografias.component';

describe('ListaRadiografiasComponent', () => {
  let component: ListaRadiografiasComponent;
  let fixture: ComponentFixture<ListaRadiografiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRadiografiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRadiografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

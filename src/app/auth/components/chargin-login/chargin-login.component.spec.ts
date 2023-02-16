import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharginLoginComponent } from './chargin-login.component';

describe('CharginLoginComponent', () => {
  let component: CharginLoginComponent;
  let fixture: ComponentFixture<CharginLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharginLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharginLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

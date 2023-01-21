import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharginComponent } from './chargin.component';

describe('CharginComponent', () => {
  let component: CharginComponent;
  let fixture: ComponentFixture<CharginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

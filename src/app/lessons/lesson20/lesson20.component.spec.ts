import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson20Component } from './lesson20.component';

describe('Lesson20Component', () => {
  let component: Lesson20Component;
  let fixture: ComponentFixture<Lesson20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

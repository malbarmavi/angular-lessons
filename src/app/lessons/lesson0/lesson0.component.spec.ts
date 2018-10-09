import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson0Component } from './lesson0.component';

describe('Lesson0Component', () => {
  let component: Lesson0Component;
  let fixture: ComponentFixture<Lesson0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

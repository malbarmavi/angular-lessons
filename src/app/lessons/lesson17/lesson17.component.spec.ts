import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson17Component } from './lesson17.component';

describe('Lesson17Component', () => {
  let component: Lesson17Component;
  let fixture: ComponentFixture<Lesson17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

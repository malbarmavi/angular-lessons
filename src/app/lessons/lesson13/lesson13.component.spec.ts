import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson13Component } from './lesson13.component';

describe('Lesson13Component', () => {
  let component: Lesson13Component;
  let fixture: ComponentFixture<Lesson13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

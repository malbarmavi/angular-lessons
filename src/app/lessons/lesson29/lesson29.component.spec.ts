import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson29Component } from './lesson29.component';

describe('Lesson29Component', () => {
  let component: Lesson29Component;
  let fixture: ComponentFixture<Lesson29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

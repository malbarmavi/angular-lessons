import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson11Component } from './lesson11.component';

describe('Lesson11Component', () => {
  let component: Lesson11Component;
  let fixture: ComponentFixture<Lesson11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

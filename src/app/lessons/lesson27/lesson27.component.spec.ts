import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson27Component } from './lesson27.component';

describe('Lesson27Component', () => {
  let component: Lesson27Component;
  let fixture: ComponentFixture<Lesson27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

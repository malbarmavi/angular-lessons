import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson14Component } from './lesson14.component';

describe('Lesson14Component', () => {
  let component: Lesson14Component;
  let fixture: ComponentFixture<Lesson14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

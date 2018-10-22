import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson21Component } from './lesson21.component';

describe('Lesson21Component', () => {
  let component: Lesson21Component;
  let fixture: ComponentFixture<Lesson21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

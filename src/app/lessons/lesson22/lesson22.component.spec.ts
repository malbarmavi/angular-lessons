import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson22Component } from './lesson22.component';

describe('Lesson22Component', () => {
  let component: Lesson22Component;
  let fixture: ComponentFixture<Lesson22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

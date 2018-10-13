import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson15Component } from './lesson15.component';

describe('Lesson15Component', () => {
  let component: Lesson15Component;
  let fixture: ComponentFixture<Lesson15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

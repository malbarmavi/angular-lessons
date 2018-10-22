import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson30Component } from './lesson30.component';

describe('Lesson30Component', () => {
  let component: Lesson30Component;
  let fixture: ComponentFixture<Lesson30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

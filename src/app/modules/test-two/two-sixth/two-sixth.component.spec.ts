/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoSixthComponent } from './two-sixth.component';

describe('TwoSixthComponent', () => {
  let component: TwoSixthComponent;
  let fixture: ComponentFixture<TwoSixthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoSixthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoThirdComponent } from './two-third.component';

describe('TwoThirdComponent', () => {
  let component: TwoThirdComponent;
  let fixture: ComponentFixture<TwoThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeForthSharedPromptComponent } from './three-forth-shared-prompt.component';

describe('ThreeForthSharedPromptComponent', () => {
  let component: ThreeForthSharedPromptComponent;
  let fixture: ComponentFixture<ThreeForthSharedPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeForthSharedPromptComponent]
    });
    fixture = TestBed.createComponent(ThreeForthSharedPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

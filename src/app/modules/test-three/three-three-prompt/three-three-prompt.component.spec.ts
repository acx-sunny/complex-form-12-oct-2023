import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeThreePromptComponent } from './three-three-prompt.component';

describe('ThreeThreePromptComponent', () => {
  let component: ThreeThreePromptComponent;
  let fixture: ComponentFixture<ThreeThreePromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeThreePromptComponent]
    });
    fixture = TestBed.createComponent(ThreeThreePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

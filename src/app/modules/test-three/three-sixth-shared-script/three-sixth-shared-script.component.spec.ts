import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSixthSharedScriptComponent } from './three-sixth-shared-script.component';

describe('ThreeSixthSharedScriptComponent', () => {
  let component: ThreeSixthSharedScriptComponent;
  let fixture: ComponentFixture<ThreeSixthSharedScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeSixthSharedScriptComponent]
    });
    fixture = TestBed.createComponent(ThreeSixthSharedScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

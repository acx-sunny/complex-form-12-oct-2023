import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFifthScriptComponent } from './three-fifth-script.component';

describe('ThreeFifthScriptComponent', () => {
  let component: ThreeFifthScriptComponent;
  let fixture: ComponentFixture<ThreeFifthScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeFifthScriptComponent]
    });
    fixture = TestBed.createComponent(ThreeFifthScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

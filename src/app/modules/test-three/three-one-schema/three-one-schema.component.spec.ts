import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeOneSchemaComponent } from './three-one-schema.component';

describe('ThreeOneSchemaComponent', () => {
  let component: ThreeOneSchemaComponent;
  let fixture: ComponentFixture<ThreeOneSchemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeOneSchemaComponent]
    });
    fixture = TestBed.createComponent(ThreeOneSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

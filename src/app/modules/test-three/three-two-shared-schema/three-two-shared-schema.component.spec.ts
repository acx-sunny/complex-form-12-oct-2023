import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTwoSharedSchemaComponent } from './three-two-shared-schema.component';

describe('ThreeTwoSharedSchemaComponent', () => {
  let component: ThreeTwoSharedSchemaComponent;
  let fixture: ComponentFixture<ThreeTwoSharedSchemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeTwoSharedSchemaComponent]
    });
    fixture = TestBed.createComponent(ThreeTwoSharedSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

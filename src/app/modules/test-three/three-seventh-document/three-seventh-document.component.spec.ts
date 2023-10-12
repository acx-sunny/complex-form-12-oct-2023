import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSeventhDocumentComponent } from './three-seventh-document.component';

describe('ThreeSeventhDocumentComponent', () => {
  let component: ThreeSeventhDocumentComponent;
  let fixture: ComponentFixture<ThreeSeventhDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeSeventhDocumentComponent]
    });
    fixture = TestBed.createComponent(ThreeSeventhDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

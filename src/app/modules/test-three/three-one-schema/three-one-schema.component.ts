import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-three-one-schema',
  templateUrl: './three-one-schema.component.html',
  styleUrls: ['./three-one-schema.component.css'],
})
export class ThreeOneSchemaComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  schemaForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.createSchemaForm();
  }

  createSchemaForm() {
    this.schemaForm = this.formBuilder.group({
      schemaName: [''],
      attDescArray: this.formBuilder.array([]),
    });
    // add one field at the start only
    this.addNewSchemaAttDescField();
  }

  get attDescArray() {
    return this.schemaForm.controls['attDescArray'] as FormArray;
  }

  addNewSchemaAttDescField() {
    const newField = this.formBuilder.group({
      attribute: [''],
      description: [''],
      isUiSchema: [false],
      uiType: ['Select UI Schema'],
    });

    this.attDescArray.push(newField);
  }

  deleteAttDescField(index: number) {
    if (this.attDescArray.length > 1) {
      this.attDescArray.removeAt(index);
    }
  }

  
  onSchemaSubmit() {
    if (this.schemaForm.valid) {
      // Extract form data
      const formData = this.schemaForm.value;
      console.log('Form Data :', formData);
    } else {
      console.log('Form is not valid');
    }
  }
}

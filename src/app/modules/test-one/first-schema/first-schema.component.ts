import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  SchemaInterface,
  localSchemaInterface,
  SchemaDataInterface,
} from 'src/app/interfaces/schema.interface';
import { GenerateUniqueIdService } from 'src/app/services/generateUniqueId/generate-unique-id.service';
import { SchemasService } from 'src/app/services/schemas/schemas.service';

@Component({
  selector: 'app-first-schema',
  templateUrl: './first-schema.component.html',
  styleUrls: ['./first-schema.component.css'],
})
export class FirstSchemaComponent implements OnInit {
  constructor(
    private _schemaService: SchemasService,
    private formBuilder: FormBuilder,
    private _generateUniqueID: GenerateUniqueIdService
  ) {}

  schemaForm: FormGroup = new FormGroup({});

  singleSchemaData!: SchemaInterface;

  schemaData: localSchemaInterface[] = [];

  ngOnInit() {
    console.log('new schema init');
    this.createSchemaForm();
  }

  createSchemaForm() {
    this.schemaForm = this.formBuilder.group({
      schemaName: [''],
      attDescArray: this.formBuilder.array([]),
    });
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
    console.log('Submit button clicked!!!');
    if (this.schemaForm.valid) {
      const schemaData: SchemaDataInterface[] = this.attDescArray.controls.map(
        (value: AbstractControl) => {
          const control = value as FormGroup;
          return {
            attribute: control.get('attribute')?.value,
            description: control.get('description')?.value,
            isUiSchema: control.get('isUiSchema')?.value,
            uiType: control.get('uiType')?.value,
          };
        }
      );

      const uniqueID = this._generateUniqueID.generateUniqueID();

      this.singleSchemaData = {
        id: `schema${uniqueID}`,
        name: this.schemaForm.value.schemaName,
        createdBy: 'Sunny Kumar',
        creationDate: new Date(),
        schemaData: schemaData,
      };

      this._schemaService.postSchemaData(this.singleSchemaData).subscribe(
        (response: any) => {
          console.log(
            'Schema Submitted successfully !!! Response in new schema :',
            response
          );
        },
        (error) => {
          console.log('Schema Submit Error : ', error);
        }
      );
    } else {
      console.log('Form is not valid ');
    }
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PromptInterface } from 'src/app/interfaces/prompt.interface';
import {
  SchemaInterface,
  localSchemaInterface,
} from 'src/app/interfaces/schema.interface';
import { GenerateUniqueIdService } from 'src/app/services/generateUniqueId/generate-unique-id.service';
import { PromptsService } from 'src/app/services/prompts/prompts.service';
import { SchemasService } from 'src/app/services/schemas/schemas.service';

@Component({
  selector: 'app-second-prompt',
  templateUrl: './second-prompt.component.html',
  styleUrls: ['./second-prompt.component.css'],
})
export class SecondPromptComponent implements OnInit {
  constructor(
    private _promptService: PromptsService,
    private formBuilder: FormBuilder,
    private _generateUniqueID: GenerateUniqueIdService,
    private _schemaService: SchemasService
  ) {}

  promptForm: FormGroup = new FormGroup({});

  singlePromptData!: PromptInterface;

  ngOnInit() {
    console.log('new prompt init');
    this.createPromptForm();
    this.loadAllSchemaData();
  }

  schemaDataRetreive: SchemaInterface[] = [];

  loadAllSchemaData() {
    this._schemaService
      .getSchemaData()
      .subscribe((response: SchemaInterface[]) => {
        this.schemaDataRetreive = response;
      });
  }

  schemaArrayForBlock: localSchemaInterface[] = [];
  selectSchemaForBlockMethod(id: string, name: string) {
    const isUnique = !this.schemaArrayForBlock.some((item) => item.id === id);
    if (isUnique) {
      const data = {
        id: id,
        name: name,
      };
      this.schemaArrayForBlock.push(data);
    }
  }

  createPromptForm() {
    this.promptForm = this.formBuilder.group({
      promptName: [''],
      systemMessage: [''],
      humanMessage: [''],
      inputVariables: [''],
    });
  }

  selectedSchemaArrayInPrompt: localSchemaInterface[] = [];

  onPromptSubmit() {
    if (this.promptForm.valid) {
      const uniqueID = this._generateUniqueID.generateUniqueID();

      this.singlePromptData = {
        id: `prompt${uniqueID}`,
        name: this.promptForm.value.promptName,
        createdBy: 'Sunny Kumar',
        creationDate: new Date(),
        promptData: {
          systemMessage: this.promptForm.value.systemMessage,
          humanMessage: this.promptForm.value.humanMessage,
          inputVariables: this.promptForm.value.inputVariables,
        },
        attachedSchema: this.selectedSchemaArrayInPrompt,
      };

      this._promptService.postPromptDataMethod(this.singlePromptData).subscribe(
        (response: any) => {
          console.log('Prompt Submitted Successfully !!!', response);
        },
        (error) => {
          console.log('Prompt Submit Error !!!', error);
        }
      );
    } else {
      console.log('Form is not valid ');
    }
  }
}

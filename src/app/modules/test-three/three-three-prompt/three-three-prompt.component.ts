import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromptInterface } from 'src/app/interfaces/prompt.interface';
import { localSchemaInterface } from 'src/app/interfaces/schema.interface';
import { GenerateUniqueIdService } from 'src/app/services/generateUniqueId/generate-unique-id.service';
import { PromptsService } from 'src/app/services/prompts/prompts.service';

@Component({
  selector: 'app-three-three-prompt',
  templateUrl: './three-three-prompt.component.html',
  styleUrls: ['./three-three-prompt.component.css'],
})
export class ThreeThreePromptComponent {

  constructor(
    private _promptService: PromptsService,
    private formBuilder: FormBuilder,
    private _generateUniqueID: GenerateUniqueIdService
  ) {}

  promptForm: FormGroup = new FormGroup({});

  singlePromptData!: PromptInterface;

  selectedSchemaArrayInPrompt: localSchemaInterface[] = [];


  ngOnInit() {
    this.createPromptForm();
  }

  createPromptForm() {
    this.promptForm = this.formBuilder.group({
      promptName: [''],
      systemMessage: [''],
      humanMessage: [''],
      inputVariables: [''],
    });
  }

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

      // Submit the data if needed
      
    } else {
      console.log('Form is not valid');
    }
  }
}
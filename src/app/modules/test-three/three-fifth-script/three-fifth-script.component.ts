import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PromptInterface } from 'src/app/interfaces/prompt.interface';
import { PromptsService } from 'src/app/services/prompts/prompts.service';

@Component({
  selector: 'app-three-fifth-script',
  templateUrl: './three-fifth-script.component.html',
  styleUrls: ['./three-fifth-script.component.css'],
})
export class ThreeFifthScriptComponent {
  scriptForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _promptService: PromptsService
  ) {}
  availablePromptArray: PromptInterface[] = [];

  ngOnInit() {
    // Create the script form
    this.createScriptForm();
    this._promptService
      .getPromptData()
      .subscribe((response: PromptInterface[]) => {
        this.availablePromptArray = response;
      });
  }

  createScriptForm() {
    this.scriptForm = this.formBuilder.group({
      scriptArrayForTypeInput: this.formBuilder.array([]),
    });
    this.addNewScriptField();
  }

  get scriptArrayForTypeInput() {
    return this.scriptForm.get('scriptArrayForTypeInput') as FormArray;
  }

  addNewScriptField() {
    const newField = this.formBuilder.group({
      stepName: [''],
      scriptType: ['Select Script Type'],
      scriptTypeInputValue: [''],
    });

    // Subscribe to changes in the 'scriptType' FormControl
    newField.get('scriptType')?.valueChanges.subscribe((selectedScriptType) => {
      if (selectedScriptType === 'llm') {
        newField.get('scriptTypeInputValue')?.setValue('Default LLM Value');
      } else {
        newField.get('scriptTypeInputValue')?.setValue('');
      }
    });

    this.scriptArrayForTypeInput.push(newField);
  }

  deleteScriptField(index: number) {
    if (this.scriptArrayForTypeInput.length > 1) {
      this.scriptArrayForTypeInput.removeAt(index);
    }
  }

  onScriptSubmit() {
    if (this.scriptForm.valid) {
      // Handle form submission here
    } else {
      // Handle validation errors
    }
  }
}

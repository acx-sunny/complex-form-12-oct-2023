import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DocumentInterface } from 'src/app/interfaces/document.interface';
import { localSchemaInterface } from 'src/app/interfaces/schema.interface';
import { DocumentsService } from 'src/app/services/documents/documents.service';
import { GenerateUniqueIdService } from 'src/app/services/generateUniqueId/generate-unique-id.service';

@Component({
  selector: 'app-three-seventh-document',
  templateUrl: './three-seventh-document.component.html',
  styleUrls: ['./three-seventh-document.component.css'],
})
export class ThreeSeventhDocumentComponent {
  documentForm: FormGroup = new FormGroup({});
  uniqueID: string = Date.now().toString();
  postDocumentData!: DocumentInterface;
  formDisable: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private _documentService: DocumentsService,
    private _generateUniqueID: GenerateUniqueIdService
  ) {}

  ngOnInit() {
    // initialize the form
    this.createdocumentForm();
  }

  // create form section
  createdocumentForm() {
    this.documentForm = this.formBuilder.group({
      name: [''],
      phraseMatcher: [''],
      isText: [false],
      isForm: [false],
      isTable: [false],
      description: [''],
    });
  }

  attachedPromptsArray: localSchemaInterface[] = [];

  receivedPromptDataFromSharedPromptForDocument(data: localSchemaInterface[]) {
    console.log('CHILD CALLED @@@@@@@@@@@');
    this.attachedPromptsArray = data;
    console.log(
      'child event is here for the prompt :',
      this.attachedPromptsArray
    );
  }

  onDocumentSubmit() {
    if (this.documentForm.valid) {
      console.log('Form is valid !!!!!!!!!!!!');
      console.log('Document Type Form Value :', this.documentForm.value);

      const uniqueID = this._generateUniqueID.generateUniqueID(); // Generate a new unique ID

      this.postDocumentData = {
        id: `document${uniqueID}`,
        name: this.documentForm.value.name,
        createdBy: 'Sunny Kumar',
        creationDate: new Date(),
        phraseMatcher: this.documentForm.value.phraseMatcher,
        description: this.documentForm.value.description,
        documentType: {
          isText: this.documentForm.value.isText,
          isForm: this.documentForm.value.isForm,
          isTable: this.documentForm.value.isTable,
        },
        attachedPrompts: this.attachedPromptsArray,
      };

      this._documentService.postDocumentData(this.postDocumentData).subscribe(
        (response: any) => {
          console.log('Document created successfully !!!', response);
          this.documentForm.reset();
          this.formDisable = true;
        },
        (error) => {
          console.log('Document Upload Error !!! ', error);
        }
      );
    } else {
      console.log('Form is not valid ');
      console.log('Form value : ', this.documentForm.value);
    }
  }

  enableEditingInDocument() {
    this.formDisable = false;
    this.documentForm.enable();
  }
}

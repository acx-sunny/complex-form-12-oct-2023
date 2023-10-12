import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestThreeRoutingModule } from './test-three-routing.module';
import { ThreeOneSchemaComponent } from './three-one-schema/three-one-schema.component';
import { ThreeTwoSharedSchemaComponent } from './three-two-shared-schema/three-two-shared-schema.component';
import { ThreeThreePromptComponent } from './three-three-prompt/three-three-prompt.component';
import { ThreeForthSharedPromptComponent } from './three-forth-shared-prompt/three-forth-shared-prompt.component';
import { ThreeFifthScriptComponent } from './three-fifth-script/three-fifth-script.component';
import { ThreeSixthSharedScriptComponent } from './three-sixth-shared-script/three-sixth-shared-script.component';
import { ThreeSeventhDocumentComponent } from './three-seventh-document/three-seventh-document.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultipleModalsComponent } from './multiple-modals/multiple-modals.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { AppParentComponent } from './app-parent/app-parent.component';

@NgModule({
  declarations: [
    ThreeOneSchemaComponent,
    ThreeTwoSharedSchemaComponent,
    ThreeThreePromptComponent,
    ThreeForthSharedPromptComponent,
    ThreeFifthScriptComponent,
    ThreeSixthSharedScriptComponent,
    ThreeSeventhDocumentComponent,
    MultipleModalsComponent,
    AppModalComponent,
    AppParentComponent
  ],
  imports: [CommonModule, TestThreeRoutingModule, ReactiveFormsModule],
})
export class TestThreeModule {}

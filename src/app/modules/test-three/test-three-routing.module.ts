import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeOneSchemaComponent } from './three-one-schema/three-one-schema.component';
import { ThreeTwoSharedSchemaComponent } from './three-two-shared-schema/three-two-shared-schema.component';
import { ThreeThreePromptComponent } from './three-three-prompt/three-three-prompt.component';
import { ThreeForthSharedPromptComponent } from './three-forth-shared-prompt/three-forth-shared-prompt.component';
import { ThreeFifthScriptComponent } from './three-fifth-script/three-fifth-script.component';
import { ThreeSixthSharedScriptComponent } from './three-sixth-shared-script/three-sixth-shared-script.component';
import { ThreeSeventhDocumentComponent } from './three-seventh-document/three-seventh-document.component';
import { MultipleModalsComponent } from './multiple-modals/multiple-modals.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { AppParentComponent } from './app-parent/app-parent.component';

const routes: Routes = [
  { path: 'schema', component: ThreeOneSchemaComponent },
  { path: 'shared-schema', component: ThreeTwoSharedSchemaComponent },
  { path: 'prompt', component: ThreeThreePromptComponent },
  { path: 'shared-prompt', component: ThreeForthSharedPromptComponent },
  { path: 'script', component: ThreeFifthScriptComponent },
  { path: 'shared-script', component: ThreeSixthSharedScriptComponent },
  { path: 'document', component: ThreeSeventhDocumentComponent },
  { path: 'modals', component: MultipleModalsComponent },
  { path: 'appmodal', component: AppModalComponent },
  { path: 'appparent', component: AppParentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestThreeRoutingModule {}

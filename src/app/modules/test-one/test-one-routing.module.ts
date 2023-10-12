import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstSchemaComponent } from './first-schema/first-schema.component';
import { SecondPromptComponent } from './second-prompt/second-prompt.component';

const routes: Routes = [
  {
    path: 'schema',
    component: FirstSchemaComponent,
  },
  {
    path: 'prompt',
    component: SecondPromptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestOneRoutingModule {}

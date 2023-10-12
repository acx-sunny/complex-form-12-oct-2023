import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestOneRoutingModule } from './test-one-routing.module';
import { FirstSchemaComponent } from './first-schema/first-schema.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecondPromptComponent } from './second-prompt/second-prompt.component';

@NgModule({
  declarations: [FirstSchemaComponent, SecondPromptComponent],
  imports: [CommonModule, TestOneRoutingModule, ReactiveFormsModule, HttpClientModule],
})
export class TestOneModule {}

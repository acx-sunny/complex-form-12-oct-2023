import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTwoRoutingModule } from './test-two-routing.module';
import { TwoFirstComponent } from './two-first/two-first.component';
import { TwoSecondComponent } from './two-second/two-second.component';
import { TwoThirdComponent } from './two-third/two-third.component';
import { TwoFifthComponent } from './two-fifth/two-fifth.component';
import { TwoSixthComponent } from './two-sixth/two-sixth.component';
import { TwoForthComponent } from './two-forth/two-forth.component';

@NgModule({
  declarations: [
    TwoFirstComponent,
    TwoSecondComponent,
    TwoThirdComponent,
    TwoForthComponent,
    TwoFifthComponent,
    TwoSixthComponent,
  ],
  imports: [CommonModule, TestTwoRoutingModule],
})
export class TestTwoModule {}

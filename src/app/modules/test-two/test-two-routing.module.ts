import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoFirstComponent } from './two-first/two-first.component';
import { TwoSecondComponent } from './two-second/two-second.component';
import { TwoThirdComponent } from './two-third/two-third.component';
import { TwoForthComponent } from './two-forth/two-forth.component';
import { TwoFifthComponent } from './two-fifth/two-fifth.component';
import { TwoSixthComponent } from './two-sixth/two-sixth.component';

const routes: Routes = [
  { path: 'first', component: TwoFirstComponent },
  { path: 'second', component: TwoSecondComponent },
  { path: 'third', component: TwoThirdComponent },
  { path: 'forth', component: TwoForthComponent },
  { path: 'fifth', component: TwoFifthComponent },
  { path: 'sixth', component: TwoSixthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTwoRoutingModule {}

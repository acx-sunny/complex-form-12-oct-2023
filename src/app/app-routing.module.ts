import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: () =>
      import('./modules/test-one/test-one.module').then((m) => m.TestOneModule),
  },
  {
    path: 'two',
    loadChildren: () =>
      import('./modules/test-two/test-two.module').then((m) => m.TestTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

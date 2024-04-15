import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmoduleComponent } from './submodule.component';
import { Inner1Component } from '../inner1/inner1.component';
import { Inner2Component } from '../inner2/inner2.component';

const routes: Routes = [
  { path: '', component: SubmoduleComponent },
  { path: 'inner1', component: Inner1Component},
  { path: 'inner2', component: Inner2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmoduleRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojmanListComponent } from './lojman/list/lojman-list.component';

const routes: Routes = [
  {
    path:'lojman/list',
    component: LojmanListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

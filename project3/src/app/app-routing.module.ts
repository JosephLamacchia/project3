import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetManagerComponent } from './set-manager/set-manager.component';

const routes: Routes = [
  {path: 'setmanager', component: SetManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

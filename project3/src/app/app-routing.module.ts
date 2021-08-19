import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetManagerComponent } from './Components/set-manager/set-manager.component';
import { CardrunnerComponent } from './Components/cardrunner/cardrunner.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'setmanager', component: SetManagerComponent },
  {path: 'cardrunner', component: CardrunnerComponent },
  {path: 'homepage', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

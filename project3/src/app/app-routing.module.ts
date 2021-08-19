import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetManagerComponent } from './Components/set-manager/set-manager.component';
import { CardrunnerComponent } from './Components/cardrunner/cardrunner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StarsComponent } from './Components/stars/stars.component';

const routes: Routes = [
  {path: 'stars', component: StarsComponent },
  {path: 'setmanager', component: SetManagerComponent },
  {path: 'cardrunner', component: CardrunnerComponent },
  {path: 'homepage', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetManagerComponent } from 'src/app/Components/set-manager/set-manager.component';
//import { SetManagerComponent } from './set-manager/set-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SetManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

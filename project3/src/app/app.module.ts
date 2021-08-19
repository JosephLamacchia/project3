import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetManagerComponent } from './Components/set-manager/set-manager.component';
import { FormsModule } from '@angular/forms';
import { CardrunnerComponent } from './Components/cardrunner/cardrunner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditcardComponent } from './Components/editcard/editcard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    SetManagerComponent,
    CardrunnerComponent,
    EditcardComponent, 
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

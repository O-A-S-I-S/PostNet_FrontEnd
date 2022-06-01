import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AccessComponent } from './components/access/access.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccessSelectionComponent } from './components/access-selection/access-selection.component';
import { MedicSignUpComponent } from './medic-sign-up/medic-sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    SignInComponent,
    LogInComponent,
    AccessComponent,
    AccessSelectionComponent,
    MedicSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

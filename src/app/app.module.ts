import { FormsModule } from '@angular/forms';
import { ObjToArrayPipe } from './models/objToArray.pipe';
import{GetFromArray}from './models/getFromArray.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule}from '@angular/common/http';
import { ListaAppointmentsComponent } from './components/lista-appointments/lista-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAppointmentsComponent,
    ObjToArrayPipe,
    GetFromArray

    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

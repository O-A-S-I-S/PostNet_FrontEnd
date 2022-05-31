import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { InitComponent } from './components/init/init.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'landingpage',pathMatch: 'full'},
  {path:'landingpage', component: InitComponent},
  {path:'appointments/:id', component: AppointmentsComponent},
  {path:'prescriptions/:patientid/:appointmentid', component: PrescriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

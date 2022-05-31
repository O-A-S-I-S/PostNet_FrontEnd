import { ListaAppointmentsComponent } from './components/lista-appointments/lista-appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  {path:'',redirectTo:'appointments',pathMatch:'full'},
{path:'appointments',component:ListaAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

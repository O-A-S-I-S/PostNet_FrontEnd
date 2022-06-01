import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessSelectionComponent } from './components/access-selection/access-selection.component';
import { AccessComponent } from './components/access/access.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'', redirectTo: 'oasis', pathMatch: 'full'},
  {path:'oasis', component:AccessComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'log-in', component:LogInComponent},
  {path:'access-select', component:AccessSelectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

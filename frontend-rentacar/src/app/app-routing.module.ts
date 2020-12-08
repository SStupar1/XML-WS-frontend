import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
import { DashboardComponent } from './pages/xml/dashboard/dashboard.component';
import { AdminComponent } from './pages/xml/profiles/admin/admin.component';
import { SimpleUserComponent } from './pages/xml/profiles/simple-user/simple-user.component';
import { AgentComponent } from './pages/xml/profiles/agent/agent.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'navbar'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profiles/admin', component:AdminComponent},
  {path: 'profiles/simple-user', component:SimpleUserComponent},
  {path: 'profiles/agent', component:AgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
import { DashboardComponent } from './pages/xml/dashboard/dashboard.component';
import { AdminComponent } from './pages/xml/profiles/admin/admin.component';
import { SimpleUserComponent } from './pages/xml/profiles/simple-user/simple-user.component';
import { AgentComponent } from './pages/xml/profiles/agent/agent.component';
import { RegistrationRequestsComponent } from './pages/xml/lists/registration-requests/registration-requests.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'navbar'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component:DashboardComponent, children: [
      {path: 'profiles/admin/:id', component:AdminComponent},
      {path: 'profiles/simple-user/:id', component:SimpleUserComponent},
      {path: 'profiles/agent/:id', component:AgentComponent},
      {path: 'lists/registration-requests', component:RegistrationRequestsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

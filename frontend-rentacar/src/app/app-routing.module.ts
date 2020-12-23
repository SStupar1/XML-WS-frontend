import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterSimpleUserComponent} from './pages/auth/registration/register-simple-user/register-simple-user.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
import { DashboardComponent } from './pages/xml/dashboard/dashboard.component';
import { AdminComponent } from './pages/xml/updates/admin/admin.component';
import { SimpleUserComponent } from './pages/xml/updates/simple-user/simple-user.component';
import { AgentComponent } from './pages/xml/updates/agent/agent.component';
import { RegistrationRequestsComponent } from './pages/xml/lists/registration-requests/registration-requests.component';
import { RegisterAgentComponent } from './pages/auth/registration/register-agent/register-agent.component';
import { FuelTypesComponent } from './pages/xml/lists/fuel-types/fuel-types.component';
import { GearshiftTypesComponent } from './pages/xml/lists/gearshift-types/gearshift-types.component';
import { CarClassesComponent } from './pages/xml/lists/car-classes/car-classes.component';
import { CarModelsComponent } from './pages/xml/lists/car-models/car-models.component';
import { CarBrandsComponent } from './pages/xml/lists/car-brands/car-brands.component';
import { AddGearshiftTypeComponent } from './pages/xml/new-items/add-gearshift-type/add-gearshift-type.component';
import { AddFuelTypeComponent } from './pages/xml/new-items/add-fuel-type/add-fuel-type.component';
import { AddCarClassComponent } from './pages/xml/new-items/add-car-class/add-car-class.component';
import { AddCarModelComponent } from './pages/xml/new-items/add-car-model/add-car-model.component';
import { AddCarBrandComponent } from './pages/xml/new-items/add-car-brand/add-car-brand.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'navbar'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent },
  {path: 'register-simple-user', component: RegisterSimpleUserComponent},
  {path: 'dashboard', component:DashboardComponent, children: [
      {path: 'updates/admin/:id', component:AdminComponent}, 
      {path: 'updates/simple-user/:id', component:SimpleUserComponent},
      {path: 'updates/agent/:id', component:AgentComponent},
      {path: 'lists/registration-requests', component:RegistrationRequestsComponent},
      {path: 'lists/fuel-types', component:FuelTypesComponent}, 
      {path: 'lists/car-classes', component:CarClassesComponent}, 
      {path: 'lists/car-models', component:CarModelsComponent}, 
      {path: 'lists/car-brands', component:CarBrandsComponent}, 
      {path: 'lists/gearshift-types', component:GearshiftTypesComponent}, 
      {path: 'new-items/add-gearshift-type', component:AddGearshiftTypeComponent}, 
      {path: 'new-items/add-fuel-type', component:AddFuelTypeComponent}, 
      {path: 'new-items/add-car-class', component:AddCarClassComponent}, 
      {path: 'new-items/add-car-model', component:AddCarModelComponent}, 
      {path: 'new-items/add-car-brand', component:AddCarBrandComponent},


      {path: 'auth/register-agent', component:RegisterAgentComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

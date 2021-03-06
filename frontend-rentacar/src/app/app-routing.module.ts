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
import { UpdateCarBrandComponent } from './pages/xml/updates/update-car-brand/update-car-brand.component';
import { UpdateCarClassComponent } from './pages/xml/updates/update-car-class/update-car-class.component';
import { UpdateFuelTypeComponent } from './pages/xml/updates/update-fuel-type/update-fuel-type.component';
import { UpdateGearshiftTypeComponent } from './pages/xml/updates/update-gearshift-type/update-gearshift-type.component';
import { UpdateCarModelComponent } from './pages/xml/updates/update-car-model/update-car-model.component';
import {BlockedComponent} from './pages/xml/lists/blocked/blocked.component';
import {ActivatedComponent} from './pages/xml/lists/activated/activated.component';
import { UpdateAdComponent } from './pages/xml/updates/update-ad/update-ad.component';
import { AddAdComponent } from './pages/xml/new-items/add-ad/add-ad.component';
import { UpdateCarComponent } from './pages/xml/updates/update-car/update-car.component';
import { RentAdListComponent } from './pages/xml/lists/rent-ad-list/rent-ad-list.component';
import { PublisherAdListComponent } from './pages/xml/lists/publisher-ad-list/publisher-ad-list.component';
import { AdDetailsComponent } from './pages/xml/ad-details/ad-details.component';
import { CartComponent } from './pages/xml/cart/cart.component';
import { PublisherReservationsComponent } from './pages/xml/lists/publisher-reservations/publisher-reservations.component';
import { PublisherBundlesComponent } from './pages/xml/lists/publisher-bundles/publisher-bundles.component';
import { ReportsComponent } from './pages/xml/lists/reports/reports.component';
import { CreatePricelistComponent } from './pages/xml/new-items/create-pricelist/create-pricelist.component';
import { AddCommentComponent } from './pages/xml/new-items/add-comment/add-comment.component';
import { ReservationsHistoryComponent } from './pages/xml/lists/reservations-history/reservations-history.component';
import { CommentRequestsComponent } from './pages/xml/lists/comment-requests/comment-requests.component';
import { AddReservationComponent } from './pages/xml/new-items/add-reservation/add-reservation.component';
import { AddReportComponent } from './pages/xml/new-items/add-report/add-report.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'navbar'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent },
  {path: 'register-simple-user', component: RegisterSimpleUserComponent},
  {path: 'dashboard', component:DashboardComponent, children: [
      {path: 'ad-details/:id', component: AdDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'updates/admin/:id', component:AdminComponent}, 
      {path: 'updates/simple-user/:id', component:SimpleUserComponent},
      {path: 'updates/agent/:id', component:AgentComponent},
      {path: 'lists/registration-requests', component:RegistrationRequestsComponent},
      {path: 'lists/fuel-types', component:FuelTypesComponent}, 
      {path: 'lists/car-classes', component:CarClassesComponent}, 
      {path: 'lists/car-models', component:CarModelsComponent}, 
      {path: 'lists/car-brands', component:CarBrandsComponent}, 
      {path: 'lists/gearshift-types', component:GearshiftTypesComponent},
      {path: 'lists/blocked', component:BlockedComponent},
      {path: 'lists/activated', component:ActivatedComponent},
      {path: 'lists/rent-ad-list', component:RentAdListComponent},
      {path: 'lists/publisher-ad-list', component:PublisherAdListComponent},
      {path: 'lists/publisher-reservations', component:PublisherReservationsComponent},
      {path: 'lists/publisher-bundles', component:PublisherBundlesComponent},
      {path: 'lists/reservations-history', component:ReservationsHistoryComponent},
      {path: 'lists/comment-requests', component:CommentRequestsComponent},
      {path: 'lists/reports', component:ReportsComponent},
      {path: 'new-items/add-gearshift-type', component:AddGearshiftTypeComponent}, 
      {path: 'new-items/add-fuel-type', component:AddFuelTypeComponent}, 
      {path: 'new-items/add-car-class', component:AddCarClassComponent}, 
      {path: 'new-items/add-car-model', component:AddCarModelComponent}, 
      {path: 'new-items/add-car-brand', component:AddCarBrandComponent},
      {path: 'new-items/add-ad', component:AddAdComponent},
      {path: 'new-items/add-pricelist', component:CreatePricelistComponent},
      {path: 'new-items/add-reservation', component:AddReservationComponent},
      {path: 'new-items/add-comment/:id', component:AddCommentComponent},
      {path: 'new-items/add-report/:id', component:AddReportComponent}, 
      {path: 'updates/update-car-brand/:id', component:UpdateCarBrandComponent},
      {path: 'updates/update-car-class/:id', component:UpdateCarClassComponent},
      {path: 'updates/update-fuel-type/:id', component:UpdateFuelTypeComponent},
      {path: 'updates/update-gearshift-type/:id', component:UpdateGearshiftTypeComponent},
      {path: 'updates/update-car-model/:id', component:UpdateCarModelComponent},
      {path: 'updates/update-ad/:id', component:UpdateAdComponent},
      {path: 'updates/update-car/:id', component:UpdateCarComponent},

      {path: 'auth/register-agent', component:RegisterAgentComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/xml/dashboard/dashboard.component';
import { AdminComponent } from './pages/xml/updates/admin/admin.component';
import { SimpleUserComponent } from './pages/xml/updates/simple-user/simple-user.component';
import { AgentComponent } from './pages/xml/updates/agent/agent.component';
import { RegistrationRequestsComponent } from './pages/xml/lists/registration-requests/registration-requests.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
import { RegisterSimpleUserComponent } from './pages/auth/registration/register-simple-user/register-simple-user.component';
import { RegisterAgentComponent } from './pages/auth/registration/register-agent/register-agent.component';
import { UpdateCarBrandComponent } from './pages/xml/updates/update-car-brand/update-car-brand.component';
import { UpdateCarClassComponent } from './pages/xml/updates/update-car-class/update-car-class.component';
import { UpdateCarComponent } from './pages/xml/updates/update-car/update-car.component';
import { UpdateCarModelComponent } from './pages/xml/updates/update-car-model/update-car-model.component';
import { UpdateFuelTypeComponent } from './pages/xml/updates/update-fuel-type/update-fuel-type.component';
import { UpdateGearshiftTypeComponent } from './pages/xml/updates/update-gearshift-type/update-gearshift-type.component';
import { AdsComponent } from './pages/xml/lists/ads/ads.component';
import { UpdateAdComponent } from './pages/xml/updates/update-ad/update-ad.component';
import { AddAdComponent } from './pages/xml/new-items/add-ad/add-ad.component';
import { RentAdsComponent } from './pages/xml/lists/rent-ads/rent-ads.component';
import { AdCardComponent } from './pages/xml/ad-card/ad-card.component';
import { RentAdListComponent } from './pages/xml/lists/rent-ad-list/rent-ad-list.component';
import { PublisherAdListComponent } from './pages/xml/lists/publisher-ad-list/publisher-ad-list.component';

//services
import { TokenInterceptorService } from './services/token-interceptor.service';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
//import of ng-zorro components
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import {DatePipe} from '@angular/common';
import { FuelTypesComponent } from './pages/xml/lists/fuel-types/fuel-types.component';
import { GearshiftTypesComponent } from './pages/xml/lists/gearshift-types/gearshift-types.component';
import { CarBrandsComponent } from './pages/xml/lists/car-brands/car-brands.component';
import { CarModelsComponent } from './pages/xml/lists/car-models/car-models.component';
import { CarClassesComponent } from './pages/xml/lists/car-classes/car-classes.component';
import { AddCarBrandComponent } from './pages/xml/new-items/add-car-brand/add-car-brand.component';
import { AddCarClassComponent } from './pages/xml/new-items/add-car-class/add-car-class.component';
import { AddCarModelComponent } from './pages/xml/new-items/add-car-model/add-car-model.component';
import { AddFuelTypeComponent } from './pages/xml/new-items/add-fuel-type/add-fuel-type.component';
import { AddGearshiftTypeComponent } from './pages/xml/new-items/add-gearshift-type/add-gearshift-type.component';
import { ActivatedComponent } from './pages/xml/lists/activated/activated.component';
import { BlockedComponent } from './pages/xml/lists/blocked/blocked.component';


registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  //declaration of components that belongs to this module
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterSimpleUserComponent,
    DashboardComponent,
    AdminComponent,
    SimpleUserComponent,
    AgentComponent,
    RegistrationRequestsComponent,
    FuelTypesComponent,
    RegisterAgentComponent,
    GearshiftTypesComponent,
    CarBrandsComponent,
    CarModelsComponent,
    CarClassesComponent,
    AddCarBrandComponent,
    AddCarClassComponent,
    AddCarModelComponent,
    AddFuelTypeComponent,
    AddGearshiftTypeComponent,
    UpdateCarBrandComponent,
    UpdateCarClassComponent,
    UpdateCarModelComponent,
    UpdateFuelTypeComponent,
    UpdateCarComponent,
    UpdateGearshiftTypeComponent,
    ActivatedComponent,
    BlockedComponent,
    UpdateAdComponent,
    AddAdComponent,
    AdsComponent,
    RentAdsComponent,
    AdCardComponent,
    RentAdListComponent,
    PublisherAdListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
    FlexLayoutModule,
    MatSliderModule,
    DemoNgZorroAntdModule
  ],
  //for services
  providers: [{ provide: NZ_I18N, useValue: en_US },
              { provide: NZ_ICONS, useValue: icons },
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorService,
                multi: true
              }, DatePipe],
  //starting component for our app
  bootstrap: [AppComponent]
})
export class AppModule { }

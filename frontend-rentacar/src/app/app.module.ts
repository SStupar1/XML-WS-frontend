import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { AlertModule } from './_alert';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/xml/dashboard/dashboard.component';
import { AdminComponent } from './pages/xml/profiles/admin/admin.component';
import { SimpleUserComponent } from './pages/xml/profiles/simple-user/simple-user.component';
import { AgentComponent } from './pages/xml/profiles/agent/agent.component';
import { RegistrationRequestsComponent } from './pages/xml/lists/registration-requests/registration-requests.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
//imports of ng-zorro components
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(en);

@NgModule({
  //declaration of components that belongs to this module
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    DashboardComponent,
    AdminComponent,
    SimpleUserComponent,
    AgentComponent,
    RegistrationRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AlertModule,
    HttpClientModule,
    FormsModule,
    NzLayoutModule,
    NzButtonModule
  ],
  //for services
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  //starting component for our app
  bootstrap: [AppComponent]
})
export class AppModule { }

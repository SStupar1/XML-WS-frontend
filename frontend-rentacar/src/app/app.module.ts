import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';

@NgModule({
  //declaration of components that belongs to this module
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  //for services
  providers: [],
  //starting component for our app
  bootstrap: [AppComponent]
})
export class AppModule { }

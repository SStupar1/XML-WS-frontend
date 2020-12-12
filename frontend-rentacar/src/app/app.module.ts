//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AlertModule } from './_alert';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/xml/dashboard/dashboard.component';
import { AdminComponent } from './pages/xml/profiles/admin/admin.component';
import { SimpleUserComponent } from './pages/xml/profiles/simple-user/simple-user.component';
import { AgentComponent } from './pages/xml/profiles/agent/agent.component';
import { RegistrationRequestsComponent } from './pages/xml/lists/registration-requests/registration-requests.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavbarComponent } from './pages/xml/navbar/navbar.component';
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
    RegistrationComponent,
    DashboardComponent,
    AdminComponent,
    SimpleUserComponent,
    AgentComponent,
    RegistrationRequestsComponent
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

    MatSliderModule,
    AlertModule,
    
    DemoNgZorroAntdModule
  ],
  //for services
  providers: [{ provide: NZ_I18N, useValue: en_US },
              { provide: NZ_ICONS, useValue: icons },
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorService,
                multi: true
              }],
  //starting component for our app
  bootstrap: [AppComponent]
})
export class AppModule { }

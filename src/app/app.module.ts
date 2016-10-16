import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {ParentsModule} from "./parent-page/parents.module";
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {ParentResponse} from "./parent-page/response.component/response.component";
import {ParentPage} from "./parent-page/paren-page.component";
import {ControlPanelComponent} from "./control-panel/control-panel.component";
import {AuthService, AppAuth} from "./shared/auth.sevice";
import {DataService, DoctorData, PatientData} from "./shared/data.service";
import {HttpService} from "./shared/http.service";
import {About} from "./about/about.component";
import {Home} from "./home/home.component";
import {NoContent} from "./no-content/no-content";
import {XLarge} from "./home/x-large/x-large.directive";
import {SignInComponent} from "./sign-in/sign-in.component";
import {HeaderComponent} from "./header/header.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProtectedClass} from "./protected/protected.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {AppState} from "./app.service";
import {ROUTES} from "./app.routes";
import {AuthGuard} from "./shared/auth.guard";
import {ProgramPageComponent} from "./parent-page/program-page/program-page.component";
import {ActivityComponent} from "./parent-page/program-page/activity.component/activity.component";
import {ProgramCartComponent} from "./parent-page/program-page/program-cart.component/program-cart.component";

@NgModule({
  declarations: [
    AppComponent,
    About,
    Home,
    NoContent,
    XLarge,
    SignInComponent,
    HeaderComponent,
    SignUpComponent,
    ProtectedClass,
    ControlPanelComponent,
    ParentPage,
    ParentResponse,
    ProgramPageComponent,
    SideMenuComponent,
    ActivityComponent,
    ProgramCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    JsonpModule,
    ParentsModule,
    NgbModule.forRoot(),
    ROUTES
  ],
  providers: [
    AuthService,
    DataService,
    DoctorData,
    PatientData,
    HttpService,
    AppState,
    AuthGuard,
    AppAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {AppState} from "./app.service";
import {DoctorData, PatientData} from "./shared/data.service";
import {AuthService} from "./shared/auth.sevice";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isAuth:boolean = false;

  constructor(public appState: AppState, private authService:AuthService, private router: Router) {

  }
}

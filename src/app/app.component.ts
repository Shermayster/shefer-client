import { Component } from '@angular/core';
import {AppState} from "./app.service";
import {DoctorData, PatientData} from "./shared/data.service";
import {IsAuth} from "./shared/auth.sevice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public appState: AppState, public doctorData:DoctorData, public patientData:PatientData, public isAuth:IsAuth) {

  }
}

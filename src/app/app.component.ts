import { Component } from '@angular/core';
import {AppState} from "./app.service";
import {DoctorData, PatientData} from "./shared/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isAuth:boolean = false;

  constructor(public appState: AppState, public doctorData:DoctorData, public patientData:PatientData) {

  }
}

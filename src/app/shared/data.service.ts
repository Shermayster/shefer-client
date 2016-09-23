/**
 * Created by novliza86 on 3.9.2016.
 */

import {Injectable, EventEmitter} from "@angular/core";
import {UserBase} from "./user.interface";
import {PatientBase} from "./patien.interface";

export class DoctorData {
  _doctorData:UserBase;
}
export class PatientData {
  _patientData:PatientBase;
}
@Injectable()
export class DataService {
  pushData = new EventEmitter<UserBase>();
  private doctor:UserBase;
  private patient:any;
  constructor(public doctorData:DoctorData, public patientData:PatientData) { }
  addDoctor(data:UserBase) {
    this.doctor = data;
    this.doctorData._doctorData = data;
    console.log('doctor is: ' + this.doctor);
  }

  getDoctor():UserBase {
    return this.doctor
  }

  addPatien(parent) {
    this.patient = parent;
    this.patientData._patientData = parent;
    console.log('patient data service: ', this.patient);
  }
  getPatient() {
    console.log('patient data service get: ', this.patient);
    return this.patient;
  }


}

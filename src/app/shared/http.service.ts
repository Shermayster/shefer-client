/**
 * Created by novliza86 on 10/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import {ActivityInterface} from "./activity.interface";
import {error} from "util";
import {DataService} from "./data.service";
import {Router} from "@angular/router";
import {PatientBase, ParentContact} from "./patien.interface";

@Injectable()

export class HttpService {
/*  private doctorsUrl = "http://beta.randomapi.com/api/c7fd9429af7f9879b873e89b02d93c1d";*/
 /* private  doctorsUrl = "http://localhost:53560/api/doctor"*/
  private  doctorsUrl = "app/mock/doctors.json";
  //private projectUrl='http://sherm84-001-site1.htempurl.com/api/';
  private projectUrl='http://projects.telem-hit.net/2016/May-men_HofitPavelOrit/Server/api/';
  //private projectUrl='http://localhost:53560/api/';
  private deleteFamilyApi = this.projectUrl + 'Patient/';
  private postProgramApi = this.projectUrl+'Program';
  private putProgramApi = this.projectUrl+'Program';
  //private serverGetDoctor = "http://localhost:53560/api/Email?Email=test@test.com&Password=test"
  //private serverGetDoctor = "http://localhost:53560/api/Email?";
  private serverGetDoctor = this.projectUrl+"Email?";
  private  activitiesUrl = this.projectUrl+"Activity";
  //private  addFamilyApi = this.projectUrl+"Patient";
  private  addFamilyApi = this.projectUrl + "Patient";
  private updateFamilyContactApi = this.projectUrl + "Patient/contact/update";
  private addDoctorApi = this.projectUrl + "AddDoctor";
  constructor(private http: Http, private dataService: DataService, private router: Router) {}

  /**get data from server
   *
   * @returns {Observable<R>}
   */
  getDataFromServer(value) {
   return this.http.get(this.serverGetDoctor+'Email='+value.email + '&Password='+value.password)
     .map(this.extractData)
     .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  postDatatoServer() {
    //todo: write post function
  }

  //get activities list from server
  getActivitiesFromServer() {
  return this.http.get(this.activitiesUrl)
    .map(res => res.json());
  }
  //add program to family
  updateProgram(program) {
   return this.http.put(this.putProgramApi+'/'+ program.programID, program, program.programId)
      .map((res: Response) => {
        if(res.status === 204) {
          return true;
        }
      })
  }

  //add new program
  addFamilyToData(family:PatientBase) {
    console.log('service add family ', family);
    return this.http.post(this.addFamilyApi, family)
      .map(res => {
        return res.json();
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateContact(patient: PatientBase) {
    return this.http.put(this.updateFamilyContactApi, patient);
  }

  deleteFamily(id:number) {
    return this.http.delete(this.deleteFamilyApi + id)
  }

  addDoctor(doctor) {
    return this.http.post(this.addDoctorApi, doctor);
  }
}

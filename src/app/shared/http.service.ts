/**
 * Created by novliza86 on 10/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import {ActivityInterface} from "./activity.interface";
import {error} from "util";
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Injectable()

export class HttpService {
/*  private doctorsUrl = "http://beta.randomapi.com/api/c7fd9429af7f9879b873e89b02d93c1d";*/
 /* private  doctorsUrl = "http://localhost:53560/api/doctor"*/
  private  doctorsUrl = "app/mock/doctors.json"
  private postProgramApi = 'http://localhost:53560/api/Program'
  //private serverGetDoctor = "http://localhost:53560/api/Email?Email=test@test.com&Password=test"
  private serverGetDoctor = "http://localhost:53560/api/Email?";
  private  activitiesUrl = "http://localhost:53560/api/Activity";
  private  addFamilyApi = "http://localhost:53560/api/Patient";
  constructor(private http: Http, private dataService: DataService, private router: Router) {}

  /**get data from server
   *
   * @returns {Observable<R>}
   */
  getDataFromServer(value) {
   return this.http.get(this.serverGetDoctor+'Email='+value.email + '&Password='+value.password)
     .map(res => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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
  createProgram(program) {
    this.http.post(this.postProgramApi, program )
      .subscribe(res => console.log(res))
  }

  //add new program
  addFamilyToData(family) {
    console.log('service add family ', family);
    this.http.post(this.addFamilyApi, family)
      .map(res => {
        this.dataService.addFamilyToLocalData(res.json());
        this.router.navigate(['protected']);
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}

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

@Injectable()

export class HttpService {
/*  private doctorsUrl = "http://beta.randomapi.com/api/c7fd9429af7f9879b873e89b02d93c1d";*/
 /* private  doctorsUrl = "http://localhost:53560/api/doctor"*/
  private  doctorsUrl = "app/mock/doctors.json";
  private postProgramApi = 'http://localhost:53560/api/Program';
  private putProgramApi = 'http://localhost:53560/api/Program';
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

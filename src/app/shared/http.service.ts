/**
 * Created by novliza86 on 10/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import {ActivityInterface} from "./activity.interface";
@Injectable()

export class HttpService {
/*  private doctorsUrl = "http://beta.randomapi.com/api/c7fd9429af7f9879b873e89b02d93c1d";*/
 /* private  doctorsUrl = "http://localhost:53560/api/doctor"*/
  private  doctorsUrl = "app/mock/doctors.json"
  private postProgramApi = 'http://localhost:53560/api/Program'
  //private serverGetDoctor = "http://localhost:53560/api/Email?Email=test@test.com&Password=test"
  private serverGetDoctor = "http://localhost:53560/api/Email?Email=test@test.com&Password=test"
  private  activitiesUrl = "http://localhost:53560/api/Activity"
  constructor(private http:Http) {}

  /**get data from server
   *
   * @returns {Observable<R>}
   */
  getDataFromServer(value) {
   return this.http.get(this.serverGetDoctor)
  }

  postDatatoServer() {
    //todo: write post function
  }

  //get activities list from server
  getActivitiesFromServer() {
  return this.http.get(this.activitiesUrl)
    .map(res => res.json());
  }

  createProgram(program) {
    this.http.post(this.postProgramApi, program )
      .subscribe(res => console.log(res))
  }

}

/**
 * Created by novliza86 on 10/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
@Injectable()

export class HttpService {
  private doctorsUrl = "app/mock/doctors.json";
  constructor(private http:Http) {}

  /**get data from server
   *
   * @returns {Observable<R>}
   */
  getDataFromServer() {
    return this.http.get(this.doctorsUrl)
      .map(res => res.json());
  }

  postDatatoServer() {
    //todo: write post function
  }



}

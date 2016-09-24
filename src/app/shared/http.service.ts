/**
 * Created by novliza86 on 10/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
@Injectable()

export class HttpService {
  private doctorsUrl = "http://beta.randomapi.com/api/mfi9sinx?key=0VJ8-EFZN-VOHZ-Y825";
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

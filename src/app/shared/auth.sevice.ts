import {Http, Response} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import {Injectable, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {UserBase} from "./user.interface";
import {AppState} from "../app.service";
import {DataService} from "./data.service";
import {HttpService} from "./http.service";
/**
 *
 */
export class IsAuth {
  _isAuth:boolean;
}
@Injectable()

export class AuthService {
  userData:any = new EventEmitter<UserBase>();
  private doctorsUrl = "app/mock/doctors.json";
  constructor(private httpService:HttpService,  private router: Router, public dataService:DataService, public isAuth:IsAuth) { }
  signupUser(user:any) {

  }
  signinUser() {
    this.router.navigate(['protected'])
  }
  /**save user data in app global memory
   *
   * @param data
   */
  pushUserData(data:UserBase) {
    this.userData.emit(data);
  }

  getAuth():boolean {
    if(this.dataService.getDoctor()) {
      this.isAuth._isAuth = true;
      return true;
    }else {
      this.isAuth._isAuth = false;
      return false;
    }
  }

  private extractData(res) {
    console.log("extract data: ", res);
    let doctor = res.json();
    return doctor.doctors.data || { };
  }



  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  logOut() {
    //todo: handle logout function
    this.isAuth._isAuth = false;
  }
}

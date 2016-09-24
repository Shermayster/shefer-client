import {Http, Response} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import {Injectable, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {UserBase} from "./user.interface";
import {AppState} from "../app.service";
import {DataService, DoctorData} from "./data.service";
import {HttpService} from "./http.service";
import {PartialObserver} from "rxjs/Observer";
/**
 *
 */
@Injectable()
export class AuthService {
  userData:any = new EventEmitter<UserBase>();
  private doctorsUrl = "app/mock/doctors.json";
  constructor(private httpService:HttpService,  private router: Router, public doctorData:DoctorData , private dataService:DataService) { }


  /**check user input to sign user
   *
   */
  signinUser(values):void {
     this.httpService.getDataFromServer()
      .subscribe(
        res => {
           this.checkUser(values,res.results[0].data)
             .subscribe(
               (value:boolean) => {
                 if(value === true) {
                   //set current doctor
                   this.dataService.setDoctor(res);
                   this.router.navigate(['protected']);

                 } else{
                   //todo: write response to user

                 }
               }
             )
        }
      );
  }

  /**compare inputs to data
   *
   * @param values
   * @param data
   */
  checkUser(values, data):Observable<boolean>{
    let user:UserBase = data.find(obj => obj.key === values.email)
    let res:boolean = user.password === values.password;
    return Observable.of(res);
  }

  /**return Object by key and value
   *
   */
  returnObj(obj, value) {
    return obj.key === value;
  }

  /**check authentication app state
   *
   * @returns {boolean}
   */
  getAuth():boolean {
    if(this.doctorData._doctorData) {
      return true;
    }else {
      return false;
    }
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

  }
}

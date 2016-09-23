import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.sevice";
import {UserBase} from "../shared/user.interface";
import {AppState} from "../app.service";
import {DataService} from "../shared/data.service";
import {HttpService} from "../shared/http.service";



@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
/*  styleUrls:['./sign-in.component.css'],*/
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  input:string = 'doctor1';
  errorMessage:string;
  signin:boolean = false;
  doctor:UserBase;
  showError:boolean = false;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, public appState: AppState, private dataService:DataService, private httpService:HttpService) { }
  get httpResponse() { return JSON.stringify(this.doctor)}
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.getDoctor();
  }

  /**Get doctor data
   *
   */
  getDoctor() {
    this.httpService.getDataFromServer()
      .subscribe(
        (data:any) => this.checkUser(data.doctors.data)
      );
  }

  /**Check if user input is valid
   *
   * @param user
   */
  checkUser(user) {
    console.log('resieved user: ', user);
    let email = this.signinForm.value.email;
    this.doctor = user.find(obj => obj.key === email);
    if(this.doctor.password === this.signinForm.value.password) {
      console.log('doctor: ', this.doctor);
      this.dataService.addDoctor(this.doctor);
      this.appState.set('value', 'signin');
      this.auth.signinUser();
    }else {
      this.showError = true;
      console.log('not valid');
    }
  }

  findUser(user) {
  return user.key === "test@test.com";
}
}

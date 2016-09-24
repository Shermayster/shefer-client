import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.sevice";
import {UserBase} from "../shared/user.interface";
import {AppState} from "../app.service";
import {DataService} from "../shared/data.service";
import {HttpService} from "../shared/http.service";
import {Router} from "@angular/router";



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
  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      password: ['', Validators.required]
    })
  }

  /**send user inputs to sign in user
   *
   */
  onSubmit() {
   this.auth.signinUser(this.signinForm.value);
  }


}

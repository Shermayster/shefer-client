import {Component, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {AppState} from "./app.service";
import {DoctorData, PatientData, DataService} from "./shared/data.service";
import {AuthService, AppAuth} from "./shared/auth.sevice";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnChanges{
  isAuth:boolean = false;

  constructor(public appState: AppState, private dataService: DataService, private router: Router, public appAuth:AppAuth) { }

  ngOnInit() {


  }
  ngOnChanges() {
    this.isAuth = this.appAuth._authState;
  }
}

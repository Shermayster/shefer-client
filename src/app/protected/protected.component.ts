import {Component, OnInit, AfterViewInit, Input} from "@angular/core";
import {AuthService} from "../shared/auth.sevice";
import {ControlPanelComponent} from "../control-panel/control-panel.component"
import {UserBase} from "../shared/user.interface";
import {DataService} from "../shared/data.service";

@Component ({
  selector:'protected',
  template:`
  <span *ngIf="!userData"><h1>you are not signed!></h1> </span>
  <app-control-panel *ngIf="userData" [data]="userData"></app-control-panel>
`

})

export class ProtectedClass implements AfterViewInit{
  userData:UserBase;
  constructor(private auth: AuthService, private dataService:DataService) { }
  ngAfterViewInit() {
      this.userData = this.dataService.getDoctorData();
    console.log('user data is: ', this.userData);
  }
}

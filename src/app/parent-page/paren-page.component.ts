/**
 * Created by novliza86 on 3.9.2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {DataService, PatientData} from "../shared/data.service";
import {Subscription} from "rxjs";
import {PatientBase, ParentContact, ActivityBase} from "../shared/patien.interface";
import {AuthService} from "../shared/auth.sevice";
import {Form} from "@angular/forms";
import {ParentService, ActivitiesResponse} from "./parent.service";
@Component ({
  selector: 'paren-page',
  templateUrl:'./parent-page.component.html',
  styles:[`table, th, td {text-align: right;}`, `input[type="text"] {direction:rtl}`],
  providers:[]
})
export class ParentPage implements OnInit, OnDestroy {
  private sub: Subscription;
  tabNumber:number = 2;
  comments:boolean = false;
  editable:boolean = false;
  contact:ParentContact;
  activitiesResponse:ActivitiesResponse;
  patient:PatientBase;
  constructor( private route: ActivatedRoute, private router: Router, private dataService:DataService,
               public patientData:PatientData, public authService:AuthService, private parentService:ParentService) { }
    ngOnInit () {
      this.sub = this.route.params.subscribe(params => {
          let id = +params['id'];
          this.patient = this.patientData._patientData;
          this.contact = Object.assign({},this.patient.parentContact);
          this.activitiesResponse = this.getActivitiesCalc(this.patient.activities);
          if (this.contact.comments) {
            this.comments = true;
          }
        },
        error => {
          //todo: delete in production
          console.log('no data');
        });
    }

  /** Get Data About Activities from service
   *
   * @param data
   */
  getActivitiesCalc(data:ActivityBase[]):ActivitiesResponse {
     return this.parentService.calcActivities(data);
    }

  /**Submit changes
   *
   */
  onSubmit() {
    //todo update post command
    console.log('submit data', this.contact);
    this.patient.parentContact = this.contact;
    this.goBack();
  }
  /**cancel changes in form
   *
   */
  onCancel() {
    this.goBack();
  }
  responseRoute() {
    console.log('navigate');
    this.router.navigate(['parent/response/', this.patient.id]);
  }

  goBack(): void {
    window.history.back();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  //turn on editing
  makeEditable() {
    this.editable = !this.editable;
  }
  //navigate to program page
  changeProgram() {
    this.router.navigate(['parent/program-page/', this.patient.id]);
  }
}

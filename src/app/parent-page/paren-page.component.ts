/**
 * Created by novliza86 on 3.9.2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {DataService, PatientData} from "../shared/data.service";
import {Subscription} from "rxjs";
import {
  PatientBase, ParentContact, patientActivityList,
  ActivitiesProgram
} from "../shared/patien.interface";
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
  isNew:boolean = false;
  comments:boolean = false;
  editable:boolean = false;
  contact:ParentContact;
  activitiesResponse:ActivitiesResponse;
  patient:PatientBase;
  constructor( private route: ActivatedRoute, private router: Router, private dataService:DataService,
               public patientData:PatientData, public authService:AuthService, private parentService:ParentService) { }
    ngOnInit () {
      this.sub = this.route.params.subscribe(params => {
        console.log(params)
        if(params){
          let id = params['id'];
          if(String(id) === "new") {
            this.isNew = true;
            this.editable = true;
          }
        }
          this.patient = this.patientData._patientData;
          this.contact = this.patient.contact;
          //let progarm:ActivitiesProgram[] = this.patient.program;
          //this.activitiesResponse = this.getActivitiesCalc(progarm);
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
  getActivitiesCalc(data:patientActivityList[]):ActivitiesResponse {
    let response
     return this.parentService.calcActivities(data);
    }

  /**Submit changes
   *
   */
  onSubmit() {
    //todo update post command
    this.isNew ? this.addFamily() : this.updateContact();
    //console.log('submit data', this.contact);
    //this.goBack();
  }
  /**cancel changes in form
   *
   */
  onCancel() {
    this.goBack();
  }
  addFamily() {
    this.patient.doctorId = this.dataService.doctorData._doctorData.doctorId;
    this.router.navigate(['parent/program-page/', "new"]);
   console.log('add family ', this.patient)

  }
  updateContact() {
    console.log('update contact', this.contact);
  }
  responseRoute() {
    console.log('navigate');
    this.router.navigate(['parent/response/', this.patient.patientID]);
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
    this.router.navigate(['parent/program-page/', this.patient.patientID]);
  }
}

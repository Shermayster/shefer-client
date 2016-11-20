/**
 * Created by novliza86 on 3.9.2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService, PatientData} from '../shared/data.service';
import {Subscription} from 'rxjs';
import {
  PatientBase, ParentContact, patientActivity,
  ActivitiesProgram
} from '../shared/patien.interface';
import {AuthService} from '../shared/auth.sevice';
import {Form} from '@angular/forms';
import {ParentService, ActivitiesResponse} from './parent.service';
@Component({
  selector: 'paren-page',
  templateUrl: './parent-page.component.html',
  styles: [`table, th, td {text-align: right;}`, `input[type="text"] {direction:rtl}`],
  providers: []
})
export class ParentPage implements OnInit, OnDestroy {
  private sub: Subscription;
  tabNumber: number = 2;
  isNew: boolean = false;
  comments: boolean = false;
  editable: boolean = false;
  contact: ParentContact;
  activitiesResponse: ActivitiesResponse;
  patient: PatientBase;
  activeProgram: ActivitiesProgram;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService,
              public patientData: PatientData, public authService: AuthService, protected parentService: ParentService) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        if (params) {
          let id = params['id'];
          if (String(id) === 'new') {
            this.isNew = true;
            this.editable = true;
          }
          this.patient = this.patientData._patientData;
          this.contact = this.patient.contact;
          this.activeProgram = this.parentService.findActiveProgram(this.patient.program);
          localStorage.setItem('patientData', JSON.stringify(this.patient));
          localStorage.setItem('patientAddress', JSON.stringify(this.contact));
        }
      })
    }


  /** Get Data About Activities from service
   *
   * @param data
   */
  getActivitiesCalc(data: patientActivity[]): ActivitiesResponse {
    let response;
    return this.parentService.calcActivities(data);
  }

  /**Submit changes
   *
   */
  onSubmit() {
    // todo update post command
    this.isNew ? this.addFamily() : this.updateContact();
    // console.log('submit data', this.contact);
    // this.goBack();
  }

  /**cancel changes in form
   *
   */
  onCancel() {
    this.goBack();
  }

  /**
   * add family to object
   */
  addFamily() {
    this.patient.doctorId = this.dataService.doctorData._doctorData.doctorId;
    localStorage.setItem('newPatient', JSON.stringify(this.patient));
    var newPatient = localStorage.getItem('newPatient')
    this.router.navigate(['parent/program-page/', 'new']);
    console.log('add family ', newPatient);

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
    localStorage.setItem('patientData', '');
    localStorage.setItem('patientAddress', '');
  }

  // turn on editing
  makeEditable() {
    this.editable = !this.editable;
  }

  // navigate to program page
  changeProgram() {
    this.router.navigate(['parent/program-page/', this.patient.patientID]);
  }



}

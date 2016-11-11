/**
 * Created by Pavel on 03/10/2016.
 */

import { Component } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { ActivityInterface } from '../../shared/activity.interface';
import { DataService, PatientData } from '../../shared/data.service';
import { ActivitiesProgram, patientActivityList, PatientBase } from '../../shared/patien.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'program-page',
  templateUrl: './program-page.component.html'
})
export class ProgramPageComponent {
  isNew: boolean = false;
  patient: PatientBase;
  activitiesAge3: ActivityInterface[];
  activitiesAge4: ActivityInterface[];
  activitiesAge5: ActivityInterface[];
  activitiesList: ActivityInterface[];
  activityProgram: ActivitiesProgram;
  constructor(private httpService: HttpService, private dataService: DataService,
    public patientData: PatientData, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.httpService.getActivitiesFromServer()
      .subscribe((activities: ActivityInterface[]) => {
        this.activitiesList = activities;
        this.activitiesAge3 = this.dataService.orderActivities(activities, '3');
        this.activitiesAge4 = this.dataService.orderActivities(activities, '4');
        this.activitiesAge5 = this.dataService.orderActivities(activities, '5');
      });
    this.patient = this.patientData._patientData;
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (String(id) === 'new') {
        this.isNew = true;
      }
    });
    this.isNew ? this.activityProgram = new ActivitiesProgram() : this.activityProgram = this.patient.program[0];

  }
  updateCart(activity, value) {
    let patientActivity: patientActivityList = new patientActivityList;
    patientActivity.activityId = activity.activityID;
    patientActivity.activityName = activity.activityName;
    patientActivity.activityType = activity.activityType;
    patientActivity.frequency = value;
    if (!this.activityProgram.patientActivityList) {
      this.activityProgram.patientActivityList = [];
      this.activityProgram.patientActivityList.push(patientActivity);
    }
    else {
      let index = this.activityProgram.patientActivityList.findIndex(x => x.activityId === patientActivity.activityId);
      if (index !== -1) {
        if (patientActivity.frequency === 0) {
          this.activityProgram.patientActivityList.splice(index, 1);
        } else {
          this.activityProgram.patientActivityList[index] = patientActivity;
        }
      }
      else {
        this.activityProgram.patientActivityList.push(patientActivity);
      }
    }
  }
  addProgram() {
    this.isNew ?  this.addFamily : this.updateProgram

  }
  //add program to new family and send data to server
  addFamily() {
    let newFamily: PatientBase = JSON.parse(localStorage.getItem('newPatient'));
    newFamily.program.push(this.activityProgram);
    newFamily.program[0].currentWeek = 0;
    newFamily.program[0].status = true;
    console.log('add family: ', newFamily);
    this.httpService.addFamilyToData(newFamily);
  }

  // add program to existing family
  updateProgram() {
    this.activityProgram.currentWeek = 0;
    this.activityProgram.patientId = this.patientData._patientData.patientID;
    this.activityProgram.status = true;
    console.log(this.activityProgram);
    this.httpService.createProgram(this.activityProgram);
  }
}



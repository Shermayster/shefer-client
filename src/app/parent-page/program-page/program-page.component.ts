/**
 * Created by Pavel on 03/10/2016.
 */

import {Component} from "@angular/core";
import {HttpService} from "../../shared/http.service";
import {ActivityInterface} from "../../shared/activity.interface";
import {DataService, PatientData} from "../../shared/data.service";
import {ActivitiesProgram, patientActivityList} from "../../shared/patien.interface";
@Component({
  selector:'program-page',
  templateUrl:'./program-page.component.html'
})
export class ProgramPageComponent {
  activitiesAge3:ActivityInterface[];
  activitiesAge4:ActivityInterface[];
  activitiesAge5:ActivityInterface[];
  activitiesList:ActivityInterface[];
  activityProgram = new ActivitiesProgram();
  constructor(private httpService:HttpService, private  dataService:DataService, public patientData:PatientData) { }

  ngOnInit() {
    this.httpService.getActivitiesFromServer()
      .subscribe((activities:ActivityInterface[]) => {
        this.activitiesList = activities;
        this.activitiesAge3 = this.dataService.orderActivities(activities, '3');
        this.activitiesAge4 = this.dataService.orderActivities(activities, '4');
        this.activitiesAge5 = this.dataService.orderActivities(activities, '5');
      })
  }
  updateCart(activity:patientActivityList) {
    console.log('event updated ', activity);
    if(!this.activityProgram.patientActivityList) {
      this.activityProgram.patientActivityList = [];
      this.activityProgram.patientActivityList.push(activity)
    }
    else {
       let index = this.activityProgram.patientActivityList.findIndex(x=> x.activityId === activity.activityId);
      if(index !== -1) {
        if(activity.frequency == 0) {
          this.activityProgram.patientActivityList.splice(index, 1);
        } else {
          this.activityProgram.patientActivityList[index] = activity;
        }
      }
      else {
        this.activityProgram.patientActivityList.push(activity);
      }
    }
  }
  addProgram() {
    this.activityProgram.currentWeek = 0;
    this.activityProgram.patientId = this.patientData._patientData.patientID;
    this.activityProgram.status = true;
    console.log(this.activityProgram);
    this.httpService.createProgram(this.activityProgram);
  }
}



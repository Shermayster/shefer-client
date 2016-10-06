/**
 * Created by Pavel on 03/10/2016.
 */

import {Component} from "@angular/core";
import {HttpService} from "../../shared/http.service";
import {ActivityInterface} from "../../shared/activity.interface";
import {DataService} from "../../shared/data.service";
@Component({
  selector:'program-page',
  templateUrl:'./program-page.component.html'
})
export class ProgramPageComponent {
  activitiesAge3:ActivityInterface[];
  activitiesAge4:ActivityInterface[];
  activitiesAge5:ActivityInterface[];
  activitiesList:ActivityInterface[];
  constructor(private httpService:HttpService, private  dataService:DataService) { }

  ngOnInit() {
    this.httpService.getActivitiesFromServer()
      .subscribe((activities:ActivityInterface[]) => {
        this.activitiesList = activities;
        this.activitiesAge3 = this.dataService.orderActivities(activities, '3');
        this.activitiesAge4 = this.dataService.orderActivities(activities, '4');
        this.activitiesAge5 = this.dataService.orderActivities(activities, '5');
      })
  }
}

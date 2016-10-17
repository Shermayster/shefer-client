/**
 * Created by Pavel on 04/10/2016.
 */

import {Component, Output, EventEmitter} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";
import {ActivityInterface} from "../../../shared/activity.interface";
import {patientActivityList} from "../../../shared/patien.interface";
@Component({
  selector:'activity-component',
  templateUrl:'./activity.component.html',
  styleUrls:['./activity.component.css']
})
export class ActivityComponent {
  @Input() activity:ActivityInterface;
  @Output() valueUpdated = new EventEmitter;
  showFreq:boolean = false;

  changeValue(e) {
    let patientActivity:patientActivityList = new patientActivityList;
    patientActivity.activityId = this.activity.activityID;
    patientActivity.frequency = e.target.value;
    console.log('value changes: ', patientActivity);
    this.valueUpdated.emit(patientActivity)
  }
}

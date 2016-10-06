/**
 * Created by Pavel on 04/10/2016.
 */

import {Component} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";
import {ActivityInterface} from "../../../shared/activity.interface";
@Component({
  selector:'activity-component',
  templateUrl:'./activity.component.html',
  styleUrls:['./activity.component.css']
})
export class ActivityComponent {
  @Input() activity:ActivityInterface;
  showFreq:boolean = false;
}

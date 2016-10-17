/**
 * Created by Pavel on 05/10/2016.
 */

import {Component} from "@angular/core/src/metadata/directives";
import {Input} from "@angular/core";
import {ActivityInterface} from "../../../shared/activity.interface";
@Component({
  selector:'program-cart',
  templateUrl:'./program-cart.component.html',
  styleUrls: ['./program-cart.component.css']
})

export class ProgramCartComponent {
  @Input() activity:ActivityInterface;
  model = 1;


}

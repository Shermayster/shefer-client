/**
 * Created by Pavel on 05/10/2016.
 */

import {Component} from '@angular/core/src/metadata/directives';
import {Input} from '@angular/core';
import {ActivityInterface} from '../../../shared/activity.interface';
import {patientActivity, ActivitiesProgram} from '../../../shared/patien.interface';
@Component({
  selector: 'program-cart',
  templateUrl: './program-cart.component.html',
  styleUrls: ['./program-cart.component.css']
})

export class ProgramCartComponent {
  @Input() activityProgram: ActivitiesProgram;

  model = 1;
  ngOnInit() {
    this.activityProgram.duration = this.model;
  }
}

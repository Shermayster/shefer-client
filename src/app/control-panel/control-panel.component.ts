import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {UserBase} from "../shared/user.interface";
import {Router} from "@angular/router";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-control-panel',
  templateUrl: 'control-panel.component.html',
  styleUrls: ['control-panel.component.css'],
  providers: [DataService]
})
export class ControlPanelComponent implements OnChanges {
  @Input() data:UserBase;
  constructor( private router:Router, private dataService:DataService) { }

  ngOnChanges() {
    if(this.data) {
      console.log('data: ', this.data);
    }
  }
  onParentSelect(parent) {
    this.dataService.setPatient(parent);
    this.router.navigate(['/parent', parent.patientID]);
  }

}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../shared/auth.sevice";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isSignIn: boolean = false;
  constructor(private  authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(
      res => this.isSignIn = res
    )

  }

}

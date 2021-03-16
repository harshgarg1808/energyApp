import { Component,OnInit } from '@angular/core';
import { LoginStatusService } from '../services/login-status/login-status.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  loginStatus: number;
  constructor(
    public sharedService: LoginStatusService) {}

    ngOnInit(){

    }
}

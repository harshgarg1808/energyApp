import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginStatusService} from '../app/services/login-status/login-status.service';
import { config } from '../environments/config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  loginStatus: number = 0;
  constructor(
    private _router: Router,
    public sharedService: LoginStatusService){} 

  ngOnInit() {
      
    let license_code = JSON.parse(localStorage.getItem(config.license_code))
    console.log(license_code);
    
    if(license_code !== null)
      this.loginStatus = parseInt(license_code.login_status);
    if (this.loginStatus) {      
      this.sharedService.loginStatus = 1;
    } 
    else {
      this._router.navigate(['/login'])
    }

  }
}

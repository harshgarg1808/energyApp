import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//toast service import
import {config} from '../../../environments/config'
@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor(
    private _router : Router,
  ) {}

  loginStatus: number;
  license_code : object = {
    user_detail : '',
    web_token : '',
    login_status : '',
  }
  
  updateDetails(value: object){
    //called when user logs in 

    this.license_code['user_details'] = value['data']
    this.license_code['web_token'] = value['token']
    this.license_code['login_status'] = '1'
    this.loginStatus = 1
    localStorage.setItem(config.license_code ,JSON.stringify(this.license_code))

  }
  sessionExpired(){
    localStorage.removeItem(config.license_code);
    this.loginStatus = 0
    // this.toastService.show('Session Expired','Please Relogin','bg-danger' ,{}); 
    setTimeout(() => {
      this._router.navigate(['/login']);
    }, 1000);  
  }

}

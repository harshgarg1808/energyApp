import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../../services/login-status/login-status.service';
import { HttpRequestService } from '../../services/httpRequest/http-request.service'
// import {ToastServiceService} from 'src/services/toastService/toast-service.service'
import { apiURL } from '../../../environments/apis'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    
  payload: Object = {
    user_name: '',
    pass_word: ''
  };

  constructor(
    private _router: Router,
    private sharedService: LoginStatusService,
    private httpService: HttpRequestService,
    // public toastService: ToastServiceService
  ){}

  ngOnInit() {
  }

  login(): void{
    
    //API call for Login credentials
    this.httpService.postRequest(apiURL.login,this.payload).subscribe((response: Object) => {
      if(response['success']){        
        this.sharedService.updateDetails(response);
        setTimeout(() => {
          this._router.navigate(['./dashboard'])  //confirm the structure
        }, 1000);

      } else {
        // this.toastService.show('Login Unsuccessfull',response['message'],'bg-danger' ,{});
      }      
    })
  }


}

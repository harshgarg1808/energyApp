import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginStatusService } from '../login-status/login-status.service';
import {config} from '../../../environments/config'

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  
  httpOptions: Object = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': ''     
    },
    
  }

  constructor(
    private httpClient: HttpClient,
    public sharedService: LoginStatusService,
  ) { }

  handleError(error: HttpErrorResponse) {
    console.log('handle');
    
    let errorObj = {
      status:false,
      msg: ''
    };
    if(error.error instanceof ErrorEvent) {
      console.log('client');
      
      errorObj.msg = error.error.message; //Client Side Errors
    } else { 
      console.log('server');
      
      errorObj.msg = error.error.message; 
    }  
    this.sharedService.sessionExpired()
    return throwError(errorObj)
  }

  public getRequest(endpoint: string){
    let LocalStorage: Object = JSON.parse(localStorage.getItem(config.license_code))
         
    this.httpOptions['headers']['Authorization'] = 'Bearer ' + LocalStorage['web_token']
    return this.httpClient.get(config.API_HOST + '/api/' + endpoint ,this.httpOptions).pipe(catchError(this.handleError.bind(this)));
  }

  public postRequest( endpoint: string, payload: Object){
    if(endpoint !== 'managelogin/login'){
     
      let LocalStorage: Object = JSON.parse(localStorage.getItem(config.license_code))         
      this.httpOptions['headers']['Authorization'] = 'Bearer ' + LocalStorage['web_token']
      payload['client_id'] = LocalStorage['user_details']['client_id']  
      
    }
    return this.httpClient.post(config.API_HOST + '/api/' + endpoint,payload,this.httpOptions).pipe(catchError(this.handleError.bind(this)));
  }

  public putRequest( endpoint: string , payload: Object){
    let LocalStorage: Object = JSON.parse(localStorage.getItem(config.license_code))
         
    this.httpOptions['headers']['Authorization'] = 'Bearer ' + LocalStorage['web_token']
    return this.httpClient.put(config.API_HOST + '/api/' + endpoint,payload,this.httpOptions).pipe(catchError(this.handleError.bind(this)));
  }

}

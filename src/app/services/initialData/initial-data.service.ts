import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiURL } from '../../../environments/apis'
import { HttpRequestService } from '../../services/httpRequest/http-request.service'
// import { ToastServiceService } from ''
const baseURL = apiURL.initialData.base
const endpoint = apiURL.initialData


@Injectable({
  providedIn: 'root'
})
export class InitialDataService {

  constructor(    
    private httpService: HttpRequestService,
    // public toastService: ToastServiceService
    ) {}
  
  ngOnInit() {}

  getLocation(){    
    return this.httpService.postRequest(baseURL+endpoint.locations, {})
  }

  getMeter(){
    return this.httpService.postRequest(baseURL+endpoint.meters, {})
  }

  getUnits(){
    return this.httpService.postRequest(baseURL+endpoint.units, {})
  }

  getFacility(){    
    return this.httpService.postRequest(baseURL+endpoint.facility, {})
  }

  getTags(payload: object){
    return this.httpService.postRequest(apiURL.controlTags.base + apiURL.controlTags.tags, payload)
  }

}

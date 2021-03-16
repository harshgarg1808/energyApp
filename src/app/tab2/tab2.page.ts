import { Component ,TemplateRef ,OnInit ,ViewChild, OnDestroy } from '@angular/core';
import {InitialDataService} from '../services/initialData/initial-data.service'
import { apiURL } from '../../environments/apis';
import { HttpRequestService } from '../services/httpRequest/http-request.service'
// import { ToastServiceService } from ''
import { LoginStatusService } from '../services/login-status/login-status.service';

const baseURL = apiURL.dashboard.base;
const endpoint = apiURL.dashboard;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('content')templateRef: TemplateRef<any>

  width:any;
  series: { name: string; data: any; }[];
  axisTitles: { x: string; y: string; };
  data: { x: string; y: number; }[];
  chartData: { series: { name: string; data: any; }[]; axisTitles: { x: string; y: string; }; height: number; barWidth: string;tickAmount: any };
  
  fillColor: string ='#0EB815';

  facilities: Array<Object>;
  units: Array<Object>;

  stepPayload: Object = {
    facility_id:''
  };
  powerPayload: Object = {
    facility_id:''
  };
  consumptionPayload: Object = {
    unit_code:''
  }
  powerFactor: { series: number []; };

  showPower: boolean = false;
  stepsData: any;
  stepDetail: any;
  showSteps: boolean = false;
  showConsumption: boolean = false;
  consumptionData: any;
  alarms: any;
  showAlarms: boolean = false;

  constructor(
    public sharedService: LoginStatusService,
    public initialData: InitialDataService,
    private httpService: HttpRequestService,
    ) {  
  }

  

  ngOnInit(): void {
    
    this.showPower = false;
    this.getInitialData()
    this.data = [
      {x:'A',y: 73000.56},
      {x:'B',y: 70000.56},
      {x:'C',y: 77000.56},
      {x:'D',y: 73000.56}
    ]

    this.axisTitles = {
      x: 'Facilities',
      y: 'Consumption (KWh)'
    }
   
  }
 doRefresh(event): void {
  setTimeout(() => {
    this.getPowerFactor();
    this.getConsumption();
    event.target.complete();  
  }, 1000);
   

 }
  getPowerFactor(): void{
    this.showPower = false
    this.httpService.postRequest(baseURL+endpoint.powerFactor,this.powerPayload).subscribe((response: Object) => {
      if(response['status'] == 'success'){  
        if(response['data'].length){
          this.powerFactor = {
            series : [response['data'][0].total_power_factor * 100]
          };
          this.showPower = true;
        }              
      } else {
        // this.toastService.show('Data Not Available',response['message'],'bg-danger' ,{});
        console.log("error");
        
      }      
    })
  }

  getStepSummary(): void{
    this.showSteps = false;
    this.httpService.postRequest(baseURL+endpoint.stepSummary,this.stepPayload).subscribe((response: Object) => {
      if(response['status'] == 'success'){        
        this.stepsData = response['data'];
        this.showSteps = true;
      } else {
        // this.toastService.show('Data Not Available',response['message'],'bg-danger' ,{});
        console.log("eroor");
        
      }      
    })
  }

  getConsumption(): void{
    this.showConsumption = false;
    this.series = []
    this.httpService.postRequest(baseURL+endpoint.consumption,this.consumptionPayload).subscribe((response: Object) => {
      if(response['status'] == 'success'){        
        this.consumptionData = response['data'];
        for(var i=0;i<this.consumptionData.length;i++){          
          this.consumptionData[i].chart_data = JSON.parse(this.consumptionData[i].chart_data)
          this.series.push(this.consumptionData[i].chart_data)
        }
        this.chartData = {
          series: this.series,
          axisTitles: this.axisTitles,
          height: window.innerHeight * 30/ 100,
          barWidth: '30%',
          tickAmount: 'dataPoints'
        }
        this.showConsumption = true;
      } else {
        console.log("eroor");
      }      
    })
  }

  getAlarms(): void{
    this.httpService.postRequest(apiURL.alarms.base,{}).subscribe((response: Object) => {
      if(response['status'] == 'success'){        
        this.alarms = response['data'];
        this.showAlarms = true;
      } else {
        console.log("eroor");
      }      
    })
  }
  getFacilityData(): void{
    this.initialData.getFacility().subscribe(response=>{
      if(response['status'] == 'success'){   
        this.facilities = response['data'];
        if(this.facilities.length){
          this.stepPayload['facility_id'] = this.facilities[0]['facility_id'];
          this.powerPayload['facility_id'] = this.facilities[0]['facility_id'];

          this.getUnitsData();
          this.getPowerFactor()
          this.getStepSummary()
        }        
      } else {
        console.log("eroor");
        this.sharedService.sessionExpired()
      }
    })
  }

  getUnitsData(): void{
    this.initialData.getUnits().subscribe(response=>{
      if(response['status'] == 'success'){   
        this.units = response['data'];
        if(this.units.length){
          this.consumptionPayload['unit_code'] = this.units[0]['list_code'];
          this.getConsumption();
        }        
      } else {
        console.log("eroor");
        this.sharedService.sessionExpired()
      }
    })
  }

  getInitialData(): void{
    this.getFacilityData();
    this.getAlarms();
  }
}

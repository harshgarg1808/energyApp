import { Component, OnInit } from '@angular/core';
import {Tab2Page} from '../../../tab2/tab2.page'
@Component({ 
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit  {

  constructor(
    public Tab2Page: Tab2Page,
  ) { }

  doRefresh(event): void{
    this.Tab2Page.getPowerFactor()
    this.Tab2Page.getConsumption()

    setTimeout(() => {
    }, 2000);
  }

  ngOnInit(){

  }
}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import {CircleGraphComponent} from '../components/circle-graph/circle-graph.component'
import {BarGraphComponent} from '../components/bar-graph/bar-graph.component'
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    IonicModule,  
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [Tab2Page,CircleGraphComponent ,BarGraphComponent] ,
})

export class Tab2PageModule {}

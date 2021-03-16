import { Component,Input, OnInit,ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
  ApexDataLabels,
  ApexMarkers,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() chartData: object;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: this.chartData['series'],
      chart: {
        type: "bar",
        height: 190,
        width: '90%',
        toolbar:{
          show: false,
        }
       
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      
      xaxis: {
        type: 'category',
        title:{
          text: this.chartData['axisTitles'].x,
        },
        tickAmount: this.chartData['tickAmount'],
        labels: {
          show: true,
          style: {
              fontSize: '11px',
          },
        }
      },
      yaxis: {
        title:{
          text: this.chartData['axisTitles'].y
        }
      },
      legend : {
        showForSingleSeries: true,
        position: 'top',

        markers: {
          radius: 12,
        },

        itemMargin: {
          horizontal: 10,
      },
      },
      
    };
  }


}

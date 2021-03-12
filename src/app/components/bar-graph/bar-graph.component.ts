import { Component, OnInit,ViewChild } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Feb",
          data: [0.7, 1.3]
        },

        {
          name: "Mar",
          data: [1.3, 2.0]
        },
      ],
      chart: {
        type: "bar",
        height: 200,
       
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
        categories: [
          "Lucknow",
          "Noida",          
        ],
        title: {
          text: "Facilities"
        },
        labels: {
          show: true,
          style: {
              fontSize: '11px',
          },
        }
      },
      yaxis: {
        title: {
          text: "Consumption"
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

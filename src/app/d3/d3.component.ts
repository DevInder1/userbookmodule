import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class D3Component implements OnInit {
  options;
  data;

  constructor() {
  }

  ngOnInit() {
  };
}


    /* this.options = {
     chart: {
     type: 'lineChart',
     useInteractiveGuideline: true,
     height: 450,
     transitionDuration: 350,
     showLegend: false,
     margin: {
     top: 20,
     right: 20,
     bottom: 40,
     left: 55
     },
     x: (d) => {
     return d.x;
     },
     y: (d) => {
     return d.y;
     },
     xScale: d3.time.scale(),
     xAxis: {
     ticks: d3.time.months,
     tickFormat: (d) => {
     return d3.time.format('%b')(new Date(d));
     }
     },
     yAxis: {
     axisLabel: 'Gross volume',
     tickFormat: (d) => {
     if (d == null) {
     return 0;
     }
     return d3.format('.02f')(d);
     },
     axisLabelDistance: 400
     }
     }
     }

     this.data = [
     {
     key: 'Cumulative Return',
     values: [
     {
     'label': 'A',
     'value': -29.765957771107
     },
     {
     'label': 'B',
     'value': 0
     },
     {
     'label': 'C',
     'value': 32.807804682612
     },
     ]
     }
     ];
     }*/


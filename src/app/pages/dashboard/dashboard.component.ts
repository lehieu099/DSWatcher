import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add dataF
    chart.data = [{
      "country": "Cá nhân",
      "litres": 501.9,
      "color": am4core.color("#1DC9B7")
    }, {
      "country": "Fanpage",
      "litres": 301.9,
      "color": am4core.color("#FFB822")
    }, {
      "country": "Mobile",
      "litres": 201.1,
      "color": am4core.color("#7371FC")
    }, {
      "country": "Bán hàng",
      "litres": 165.8,
      "color": am4core.color("#B2967D")
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.propertyFields.fill = "color";

    chart.legend = new am4charts.Legend();
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    chart.legend.valueLabels.template.text = "";
    chart.legend.useDefaultMarker = true;
    // const marker:any = chart.legend.markers.template.children.getIndex(0);
    // var marker:any = chart.legend.markers.template.children.getIndex(0);
    // marker.cornerRadius(12, 12, 12, 12);


    // marker.height=10;
    // marker.width = 10;
    chart.legend.position = "top";
    // chart.legend.align="center";
    chart.legend.fontSize = 12;
    chart.align = "center";
    chart.valign = "middle";
    chart.legend.align ="center"
  }

  constructor() { }


}



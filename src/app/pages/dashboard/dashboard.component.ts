import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am5themes_Animated from "@amcharts/amcharts4/themes/Animated";

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
      "country": "Lithuania",
      "litres": 501.9,
      "color": am4core.color("#ED1C24")
    }, {
      "country": "Czechia",
      "litres": 301.9,
      "color": am4core.color("#235789")
    }, {
      "country": "Ireland",
      "litres": 201.1,
      "color": am4core.color("#F1D302")
    }, {
      "country": "Germany",
      "litres": 165.8,
      "color": am4core.color("#020100")
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.propertyFields.fill = "color";

    chart.legend = new am4charts.Legend();
  }

  constructor() { }


}



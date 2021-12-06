import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


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
    chart.legend.align = "center"

    this.chartForForm();
    this.postOverTime();
  }

  chartForForm() {
    var chart = am4core.create("chartForForm", am4charts.PieChart);

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
    chart.legend.align = "center"
  }

  divLinechart() {
  }

  postOverTime() {
    // Apply chart themes
    am4core.useTheme(am4themes_animated);
    // am4core.useTheme(am4themes_kelly);

    var container = am4core.create("postOverTime-chart", am4core.Container);
    container.height = am4core.percent(100);
    container.width = am4core.percent(100);
    // Create chart instance
    var chart = container.createChild(am4charts.XYChart);
    chart.marginRight = 400;
    chart.percentWidth= 100;
    chart.percentHeight=100;
    // Add data
    chart.data = [{
      "country": "Lithuania",
      "research": 150000,
      "marketing": 250,
      "sales": 199,
      "test": 1000
    }, {
      "country": "Czech Republic",
      "research": 150000,
      "marketing": 222,
      "sales": 251,
      "test": 1000

    }, {
      "country": "Ireland",
      "research": 100000,
      "marketing": 170,
      "sales": 199,
      "test": 1000
    }, {
      "country": "Germany",
      "research": 165.8,
      "marketing": 122,
      "sales": 90,
      "test": 1000
    }, {
      "country": "Australia",
      "research": 139.9,
      "marketing": 99,
      "sales": 252,
      "test": 1000
    }, {
      "country": "Austria",
      "research": 128.3,
      "marketing": 85,
      "sales": 84,
      "test": 1000
    }, {
      "country": "UK",
      "research": 99,
      "marketing": 93,
      "sales": 142,
      "test": 1000
    }, {
      "country": "Belgium",
      "research": 60,
      "marketing": 50,
      "sales": 55,
      "test": 1000
    }, {
      "country": "The Netherlands",
      "research": 50,
      "marketing": 42,
      "sales": 25,
      "test": 1000
    }];

    //console.log('chart', chart);


    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Expenditure (M)";

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "research";
    series.dataFields.categoryX = "country";
    series.name = "Research";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = true;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "marketing";
    series2.dataFields.categoryX = "country";
    series2.name = "Marketing";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.stacked = true;

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "sales";
    series3.dataFields.categoryX = "country";
    series3.name = "Sales";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;

    var series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.dataFields.valueY = "test";
    series4.dataFields.categoryX = "country";
    series4.name = "Test";
    series4.tooltipText = "{name}: [bold]{valueY}[/]";
    series4.stacked = true;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }
  constructor() { }


}



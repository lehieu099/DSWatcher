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
    this.chartdiv();
    this.chartForForm();
    this.postOverTime();
    this.likeShareChart();
  }

  chartdiv() {
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

    var chart = am4core.create("postOverTime-chart", am4charts.XYChart);
    // Create chart instance
    // Add data
    chart.data = [{
      "country": "Lithuania",
      "research": 150000,
      "marketing": 300000,
      "sales": 50000,
      "test": 100000
    }, {
      "country": "Czech Republic",
      "research": 150000,
      "marketing": 222,
      "sales": 251,
      "test": 1000

    }, {
      "country": "Ireland",
      "research": 150000,
      "marketing": 222,
      "sales": 251,
      "test": 1000
    }, {
      "country": "Germany",
      "research": 150000,
      "marketing": 222,
      "sales": 251,
      "test": 1000
    }, {
      "country": "Australia",
      "research": 150000,
      "marketing": 222,
      "sales": 251,
      "test": 1000
    }, {
      "country": "Austria",
      "research": 128000,
      "marketing": 85000,
      "sales": 84,
      "test": 1000
    }, {
      "country": "UK",
      "research": 99000,
      "marketing": 93000,
      "sales": 142000,
      "test": 1000
    }, {
      "country": "Belgium",
      "research": 60000,
      "marketing": 500000,
      "sales": 55000,
      "test": 10000
    }, {
      "country": "The Netherlands",
      "research": 500000,
      "marketing": 420000,
      "sales": 25000,
      "test": 10000
    }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;



    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Số lượng sắc thái bài viết";


    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "research";
    series.dataFields.categoryX = "country";
    series.name = "Research";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = true;

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "marketing";
    series2.dataFields.categoryX = "country";
    series2.name = "Marketing";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.stacked = true;

    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "sales";
    series3.dataFields.categoryX = "country";
    series3.name = "Sales";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;

    let series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.dataFields.valueY = "test";
    series4.dataFields.categoryX = "country";
    series4.name = "Test";
    series4.tooltipText = "{name}: [bold]{valueY}[/]";
    series4.stacked = true;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }

  likeShareChart() {
    // Create chart instance
    var chart = am4core.create("likeShareChart", am4charts.XYChart);

    // Add data
    chart.data = [{
      "country": "Lithuania",
      "litres": 501.9,
      "units": 250
    }, {
      "country": "Czech Republic",
      "litres": 301.9,
      "units": 222
    }, {
      "country": "Ireland",
      "litres": 201.1,
      "units": 170
    }, {
      "country": "Germany",
      "litres": 165.8,
      "units": 122
    }, {
      "country": "Australia",
      "litres": 139.9,
      "units": 99
    }, {
      "country": "Austria",
      "litres": 128.3,
      "units": 85
    }, {
      "country": "UK",
      "litres": 99,
      "units": 93
    }, {
      "country": "Belgium",
      "litres": 60,
      "units": 50
    }, {
      "country": "The Netherlands",
      "litres": 50,
      "units": 42
    }];
    //Create legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.contentAlign = "right";

    chart.legend.useDefaultMarker = true;
    let marker: any = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.height = 10;
    marker.width = 10;
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Số lượng sắc thái bài viết";

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.name = "litres";
    series.stroke = am4core.color("#2D9CDB");
    series.strokeWidth = 3;
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "Units";
    series2.stroke = am4core.color("#F2C94C");
    series2.strokeWidth = 3;
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";


  }
  constructor() { }


}



import { Component, OnInit } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'src/app/ng-antd-zorro/ng-zorro-antd.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }

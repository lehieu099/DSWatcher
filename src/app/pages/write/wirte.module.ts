import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';
import { NgZorroAntdModule } from 'src/app/ng-antd-zorro/ng-zorro-antd.module';
import { WirteRoutingModule} from './wirte-routing.module';

@NgModule({
  declarations: [WriteComponent],
  imports: [
    CommonModule,
    WirteRoutingModule,
    NgZorroAntdModule
  ],
  exports:[WriteComponent]
})
export class WirteModule { }

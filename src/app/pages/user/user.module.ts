import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgZorroAntdModule } from 'src/app/ng-antd-zorro/ng-zorro-antd.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    UserRoutingModule
  ],
  exports: [UserComponent]
})
export class UserModule { }

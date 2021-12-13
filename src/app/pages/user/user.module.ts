import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgZorroAntdModule } from 'src/app/ng-antd-zorro/ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [UserComponent]
})
export class UserModule { }

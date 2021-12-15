import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { NgZorroAntdModule } from 'src/app/ng-antd-zorro/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user.component';

@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    EditUserRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[EditUserComponent]
})
export class EditUserModule { }

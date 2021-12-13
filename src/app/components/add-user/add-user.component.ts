import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DSwatcherService } from 'src/app/service/dswatcher.service';

import { UserComponent } from 'src/app/pages/user/user.component';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DataItem {
  id: number;
  userName: string;
  perMission: string;
  status: boolean;
  email: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private dsWatcherService: DSwatcherService, private message: NzMessageService) {
    this.addUserForm = this.fb.group({
      userName: ['', [Validators.required]],
      perMission: [''],
      status: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  createMessage(type: string): void {
    this.message.create(type, `Tạo thành khoản thành công`);
  }

  submitAddUserForm() {
    this.dsWatcherService.create(this.addUserForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
    this.route.navigateByUrl('/user');
  }

  cancel() {
    this.route.navigateByUrl('/user');
  }
}

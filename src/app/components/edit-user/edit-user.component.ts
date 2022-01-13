import { Location } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DSwatcherService } from 'src/app/service/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  currentUser: any;
  username: any;
  permission: any;
  status: any;
  email: any;

  constructor(private router: Router,
    private message: NzMessageService,
    private fb: FormBuilder,
    private dsWatcherService: DSwatcherService,
    private route: ActivatedRoute,
    private zone: NgZone,
    private location: Location
  ) {
    this.editUserForm = this.fb.group({
      usernameEdit: ['', [Validators.required]],
      permissionEdit: [''],
      statusEdit: [''],
      emailEdit: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.zone.run(() => {
      this.getUser(this.route.snapshot.paramMap.get('id'));
    })
  }

  getUser(id: any) {
    this.dsWatcherService.get(id).subscribe(
      data => {
        this.currentUser = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  submitEditUserForm() {
    console.log(this.currentUser);

    this.dsWatcherService.update(this.currentUser.id, this.currentUser).subscribe(
      response => {
        // this.message.create('success', `Cập nhật người dùng thành công!`);
        this.router.navigateByUrl('/users');
      },
      error => {
        console.log(error);
      }     
    )
  }

  cancel() {
    this.router.navigateByUrl('/users');
  }
}

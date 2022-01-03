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
  username: string = "";
  permission: string = "";
  status: boolean = false;
  email: string = "";

  constructor(private router: Router,
    private message: NzMessageService,
    private fb: FormBuilder,
    private dsWatcherService: DSwatcherService,
    private route: ActivatedRoute,
    private zone: NgZone
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
        this.username = this.currentUser.username;
        this.permission = this.currentUser.permission;
        this.status = this.currentUser.status;
        this.email = this.currentUser.email;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  submitEditUserForm() {
    this.dsWatcherService.update(this.currentUser.id, this.currentUser).subscribe(
      data => {
        console.log(data);
        this.message.create('success', `Cập nhật người dùng thành công!`);
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

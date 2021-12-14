import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DSwatcherService } from 'src/app/service/dswatcher.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  currentUser: any;

  constructor(private router: Router,
    private message: NzMessageService,
    private fb: FormBuilder,
    private dsWatcherService: DSwatcherService,
    private route: ActivatedRoute
  ) {
    this.editUserForm = this.fb.group({
      userNameEdit: ['', [Validators.required]],
      perMissionEdit: [''],
      statusEdit: [''],
      emailEdit: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id: any) {
    this.dsWatcherService.get(id).subscribe(
      data => {
        this.currentUser = data;
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
        this.router.navigateByUrl('/user');
      },
      error => {
        console.log(error);
      }
    )
  }

  cancel() {
    this.router.navigateByUrl('/user');
  }
}

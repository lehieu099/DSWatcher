import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DSwatcherService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = '';
  listuser: any;
  loading = true;
  constructor(private dsWatcherService: DSwatcherService, private route: Router, private message: NzMessageService, private zone: NgZone) {

  }

  ngOnInit(): void {
    this.zone.run(() => {
      this.retrieveData();
    });
  }

  retrieveData(): void {
    this.dsWatcherService.getAll().subscribe(
      data => {
        this.listuser = data;
        for (var user of this.listuser) {
          if (user.permission == "user") {
            user.permission = "Người dùng";
          }
          else if (user.permission == "admin") {
            user.permission = "Admin"
          }
          else user.permission = "Giám sát";
        }
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    this.loading = false;
  }

  //trigger input search
  keyDown(event: any) {
    if (event.keyCode == 13) {
      this.btnSearch();
    }
  }

  btnSearch(): void {
    this.loading = false;
    this.dsWatcherService.findByUserName(this.username).subscribe(
      data => {
        this.listuser = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  btnAdd(): void {
    this.route.navigateByUrl('users/adduser');
  }

  Edit(id: any): void {
    this.route.navigateByUrl(`users/${id}`)
  }

  Delete(i: any, username: any): void {
    this.dsWatcherService.delete(i).subscribe(
      response => {
        console.log(response);
        this.retrieveData();
        this.message.create('warning', `Đã xoá người dùng <b>${username}</b>`);
      },
      error => {
        console.log(error);
      }
    )
  }

  disableAccount = false;
  checkStatusSwitch(id: any, data: any) {
    console.log(id);
    console.log(data);

    this.dsWatcherService.update(id, data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}

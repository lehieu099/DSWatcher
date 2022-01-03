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
  user: any;
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
        this.user = data;
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
        this.user = data;
        // if (this.user.length == 0) {
        //   window.alert("Khong co username trong du lieu");
        //   this.retrieveData();
        // }
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
  checkStatusSwitch(status: any, data:any){
    console.log(status);
    console.log(data);

    this.dsWatcherService.update(status, data).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    )
  }
}

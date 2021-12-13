import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DSwatcherService } from 'src/app/service/dswatcher.service';

interface DataItem {
  id: number;
  userName: string;
  perMission: string;
  status: boolean;
  email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = '';
  user: any;
  loading = true;
  constructor(private dsWatcherService: DSwatcherService, private route: Router, private message : NzMessageService) {
    this.retrieveData();
  }

  ngOnInit(): void {
    this.retrieveData();
  }



  Edit(i: any): void {
  }

  Delete(i: any, userName: any): void {
    this.dsWatcherService.delete(i).subscribe(
      response =>{
        console.log(response);
        this.retrieveData();
        this.message.create('warning',`Đã xoá người dùng <b>${userName}</b>`);
      },
      error =>{
        console.log(error);
      }
    )
  }

  
  deleteMessage(type: string): void {
    
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
    this.dsWatcherService.findByUserName(this.userName).subscribe(
      data => {
        this.user = data;
        if (this.user.length == 0) {
          window.alert("Khong co username trong du lieu");
          this.retrieveData();
        }
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  btnAdd(): void {
    this.route.navigateByUrl('user/adduser');
  }
}
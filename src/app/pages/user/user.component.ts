import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { HttpParams } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  current = 1;
  selectPermission = '';
  selectStatus : any ;
  
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10];
  constructor(private dsWatcherService: DSwatcherService,
    private route: Router,
    private message: NzMessageService,
    private zone: NgZone,
    private router: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.zone.run(() => {
      this.retrieveData();
    });
  }

  getRequestParams(searchUsername: string, page: number, pageSize: number, permission: string, status: boolean): any{
    let params: any ={};
    
    if(searchUsername){
      params['username'] = searchUsername;
    }

    if(page){
      params['page'] = page -1;
    }

    if(pageSize){
      params['size'] = pageSize;
    }

    if(permission){
      params['permission'] = permission;
    }

    if(status != null){
      params['status'] = status;
      console.log(status);
    }
    
    return params;
  }
  
  retrieveData(): void {
    const params = this.getRequestParams(this.username, this.page, this.pageSize, this.selectPermission, this.selectStatus);
    
    this.dsWatcherService.getAll(params).subscribe(
      data => {
        const { users, totalItems } = data;
        this.listuser = users;
        this.count = totalItems;
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

    handlePageChange(event: number): void {
      this.page = event;
      this.retrieveData();
    }
    
    //trigger input search
    keyDown(event: any) {
      if (event.keyCode == 13) {
      this.btnSearch();
    }
  }

  params: any;

  btnSearch(): void {
    // this.loading = false;
    // this.dsWatcherService.filter(this.params).subscribe(
    //   data => {
    //     this.listuser = data;
    //     console.log(data);
    //     console.log(this.selectPermission, this.selectStatus);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.page = 1;
    this.retrieveData();
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

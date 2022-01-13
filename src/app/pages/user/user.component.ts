import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { HttpParams } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
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
  selectPermission = '';
  selectStatus: any;

  page = 0;
  count = 0;
  pageSize = 10;
  totalPages = 0;
  pageSizeOptions = [10, 20];
  confirmModal: any;
  constructor(private dsWatcherService: DSwatcherService,
    private route: Router,
    private message: NzMessageService,
    private zone: NgZone,
    private router: ActivatedRoute,
    private modal: NzModalService) {
  }


  ngOnInit(): void {
    this.zone.run(() => {
      this.retrieveData();
    });
  }

  getRequestParams(searchUsername: string, page: number, pageSize: number, permission: string, status: boolean): any {
    let params: any = {};

    if (searchUsername) {
      params['username'] = searchUsername;
    }

    if (page) {
      params['page'] = page;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }

    if (permission) {
      params['permission'] = permission;
    }

    if (status != null) {
      params['status'] = status;
    }

    return params;
  }

  retrieveData(): void {
    const params = this.getRequestParams(this.username, this.page, this.pageSize, this.selectPermission, this.selectStatus);
    let urlParams = this.route.navigate(
      [],
      {
        relativeTo: this.router,
        queryParams: params,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
        skipLocationChange: false,
      });

    this.dsWatcherService.getAll(params).subscribe(
      response => {
        const { users, totalUsers, totalPages, currentPage, limit } = response;
        this.listuser = users;
        this.count = totalUsers;
        this.totalPages = totalPages;
        this.page = currentPage;
        this.pageSize = limit;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    this.loading = false;
  }

  pageIndexChange(event: number): void {
    this.page = event;
    this.retrieveData();
  }

  pageSizeChange(event: number): void {
    this.pageSize = event
    console.log(event);
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
    this.page = 1;
    this.retrieveData();
  }

  btnAdd(): void {
    this.route.navigateByUrl('users/adduser');
  }

  Edit(id: any): void {
    this.route.navigateByUrl(`users/${id}`)
    console.log(this.router.root);
  }


  disableAccount = false;
  checkStatusSwitch(id: any, data: any) {
    this.dsWatcherService.update(id, data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  showConfirm(i: any, username: any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: `Bạn muốn xóa người dùng <b>${(username)}</b>?`,
      nzContent: 'Dữ liệu không thể khôi phục !!!',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.dsWatcherService.delete(i).subscribe(
            response => {
              this.retrieveData();
            }
          )
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
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
}

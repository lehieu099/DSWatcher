import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number;
  userName: string;
  permission: string;
  status: boolean;
  email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listUser: DataItem[] = [
    {
      id: 0,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 1,
      userName: "HieuLD",
      permission: "Người dùng",
      status: false,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 2,
      userName: "HieuLD",
      permission: "Người dùng",
      status: false,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 3,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 4,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 5,
      userName: "HieuLD",
      permission: "Người dùng",
      status: false,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 6,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 7,
      userName: "HieuLD",
      permission: "Người dùng",
      status: false,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 8,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 9,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 10,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 11,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 12,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    },
    {
      id: 13,
      userName: "HieuLD",
      permission: "Người dùng",
      status: true,
      email: "duyhieu099@gmail.com"
    }
  ];
  listOfUser = [...this.listUser];


  del(i: any): void {
  }

  edit(i:any):void{

  }
}

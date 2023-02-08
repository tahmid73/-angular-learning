import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';
import { EmployeeList } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers:[RoomsService]
})
export class EmployeeComponent implements OnInit{
  empName:string = "john";
  constructor(@Optional() private roomService:RoomsService){}

  employeeList:EmployeeList []=[]

  ngOnInit():void{
    this.employeeList=[{
      eId:1,
      name:'Tahmid',
      email:'tahmid@gmail.com'
    },
    {
      eId:2,
      name:'Tahmid',
      email:'tahmid@gmail.com'
    }
  ]
  }
}

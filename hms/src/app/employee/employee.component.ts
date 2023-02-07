import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers:[RoomsService]
})
export class EmployeeComponent implements OnInit{
  empName:string = "john";
  constructor(@Optional() private roomService:RoomsService){}

  roomList:RoomList[]=[]

  ngOnInit():void{
    // this.roomList=this.roomService.getRooms()
  }
}

import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hiderooms=false;
  roomNo=2;
  buttonName="Hide";
  selectedRoom!:RoomList;

  rooms:Room={
    totalRooms:30,
    availableRooms:2,
    bookedRooms:10
  }  

  roomList:RoomList[]=[]

  constructor(){}
  ngOnInit():void{
    this.roomList=[{
      roomType:"Delux Room",
      amenities:"Air Condition",
      price:5000,
      photos:"https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg",
      checkInTime:new Date('11-jan-2023'),
      checkOutTime:new Date('6-feb-2023'),
      availibility:true,
      roomId:1
    },
    {
      roomType:"Family Room",
      amenities:"Air Condition",
      price:4000,
      photos:"https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg",
      checkInTime:new Date('19-jan-2023'),
      checkOutTime:new Date('6-feb-2023'),
      availibility:true,
      roomId:2
    }
  ]
  }

  toggle(){
    this.hiderooms=!this.hiderooms;
    if(this.hiderooms==false)
        this.buttonName="Hide"
    else
      this.buttonName="Show"
  }
  selectRoom(room:RoomList){
    this.selectedRoom=room
  }
}

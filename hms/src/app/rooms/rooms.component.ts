import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hiderooms = false;
  roomNo = 2;
  buttonName = "Hide";
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 30,
    availableRooms: 2,
    bookedRooms: 10
  }

  roomList: RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  
  // roomService=new RoomsService();

  constructor(private roomService: RoomsService) { }


  ngAfterViewInit(): void {
    this.headerComponent.title="Tahmid"
  }
  ngOnInit(): void { 
    this.roomList=this.roomService.getRooms();
  }

  toggle() {
    this.hiderooms = !this.hiderooms;
    if (this.hiderooms == false)
      this.buttonName = "Hide"
    else
      this.buttonName = "Show"
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      roomId: 3,
      roomType: 'Normal Room',
      amenities: 'tv,ac',
      price: 4000,
      photos: 'https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg',
      checkInTime: new Date('6-feb-2023'),
      checkOutTime: new Date('8-feb-2023'),
      availibility: true
    }
    this.roomList = [...this.roomList, room]
  }
}

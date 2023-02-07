import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit{
  ngOnInit (): void {
  }
  room:RoomList={
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }

  successMessage:string='';
  constructor(private roomService:RoomsService){}

  AddRoom(roomFrom:NgForm){
    this.roomService.addRoom(this.room).subscribe((data)=>{
      this.successMessage='Room Added Successfully';
      roomFrom.resetForm()
    })
  }
}

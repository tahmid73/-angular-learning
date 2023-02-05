import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hiderooms=false;
  roomNo=2;
  buttonName="Hide"
  constructor(){}
  ngOnInit():void{

  }

  rooms:Room={
    totalRooms:30,
    availableRooms:0,
    bookedRooms:10
  }  

  toggle(){
    this.hiderooms=!this.hiderooms;
    if(this.hiderooms==false)
        this.buttonName="Hide"
    else
      this.buttonName="Show"
  }
}

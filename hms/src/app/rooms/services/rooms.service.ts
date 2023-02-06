import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:RoomList[]= [{
    roomType: "Delux Room",
    amenities: "Air Condition",
    price: 5000,
    photos: "https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg",
    checkInTime: new Date('11-jan-2023'),
    checkOutTime: new Date('6-feb-2023'),
    availibility: true,
    roomId: 1
  },
  {
    roomType: "Family Room",
    amenities: "Air Condition",
    price: 4000,
    photos: "https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg",
    checkInTime: new Date('19-jan-2023'),
    checkOutTime: new Date('6-feb-2023'),
    availibility: true,
    roomId: 2
  }
  ] 

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) { 
    console.log(this.config.apiEndPoint)
  }

  ngOnInit():void{
  }
  getRooms(){
    return this.roomList;
  }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
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

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  })
  // roomService=new RoomsService();

  //async 
  subscription !: Subscription

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message)
      return of([])
    })
  );

  roomsCount$=this.roomService.getRooms$.pipe(
    map((rooms)=>rooms.length)
  )

  constructor(private roomService: RoomsService) { }


  ngAfterViewInit (): void {
    this.headerComponent.title = "Tahmid"
  }
  ngOnInit (): void {
    //jsonPlaceHolder photots
    this.roomService.getPhotos().subscribe((data) => {
      console.log(data);
    })

    this.stream.subscribe((data) => console.log(data))
    // this.roomService.getRooms$.subscribe(rooms=>{
    //   this.roomList=rooms;
    // })
  }

  toggle () {
    this.hiderooms = !this.hiderooms;
    if (this.hiderooms == false)
      this.buttonName = "Hide"
    else
      this.buttonName = "Show"
  }
  selectRoom (room: RoomList) {
    this.selectedRoom = room
  }

  addRoom () {
    const room: RoomList = {
      // roomNumber: '3',
      roomType: 'Normal Room',
      amenities: 'tv,ac',
      price: 4000,
      photos: 'https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg',
      checkinTime: new Date('6-feb-2023'),
      checkoutTime: new Date('8-feb-2023'),
      rating: 4.5
    }
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  updateRoom () {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Normal Room',
      amenities: 'tv,ac',
      price: 4000,
      photos: 'https://www.eliaermouhotel.com/uploads/nr_photos/D1024/deluxeroom_8338.jpg',
      checkinTime: new Date('6-feb-2023'),
      checkoutTime: new Date('8-feb-2023'),
      rating: 4.5
    }
    this.roomService.updateRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  deleteRoom () {
    this.roomService.deleteRoom('9201f3b4-81e8-4763-8e05-2f45580a26f1').subscribe((data) => {
      this.roomList = data
    })
  }



}



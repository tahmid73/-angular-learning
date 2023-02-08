import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, map } from 'rxjs';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-update',
  templateUrl: './rooms-update.component.html',
  styleUrls: ['./rooms-update.component.scss']
})
export class RoomsUpdateComponent implements OnInit{
  id:string=''

  id$=this.router.params.pipe(
    map((params)=>params['id'])
  )


  
  constructor(private router:ActivatedRoute,private roomService:RoomsService){}
  ngOnInit (): void {
  }

}

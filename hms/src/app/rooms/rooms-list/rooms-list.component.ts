import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{
  
  @Input() rooms!:RoomList[];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  @Input() price:number=0;
  
  ngOnInit(): void {
    
  }

  SelectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }
}

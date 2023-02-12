import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from '../rooms/rooms-add/rooms-add.component';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsUpdateComponent } from '../rooms/rooms-update/rooms-update.component'
import { RoomGuard } from './room.guard';
const routes: Routes = [
   {path: 'rooms', component: RoomsComponent,canActivate:[RoomGuard],
   canActivateChild:[RoomGuard] ,
   children:[
    {path:'add',component:RoomsAddComponent},
    // {path:':id',component:RoomsBookingComponent}
  ]},
  { path: 'rooms/add', component: RoomsAddComponent },
  { path: 'rooms/update/:id', component: RoomsUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }

import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { Room, RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = []

  header=new HttpHeaders({'token':"2345"})
  getRooms$ = this.http.get<RoomList[]>('/api/rooms',{
    headers:this.header
  }).pipe(shareReplay(1))

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(this.config.apiEndPoint)

  }

  ngOnInit (): void {
  }
  getRooms(){
    const header=new HttpHeaders({'token':"2345"})
    return this.http.get<RoomList[]>('/api/rooms/',{
      headers:header
    })
  }

  addRoom (room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room)
  }
  updateRoom (room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room)
  }

  deleteRoom (id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }

  getPhotos () {
    const request = new HttpRequest('GET', "https://jsonplaceholder.typicode.com/photos",
      { reportPorogress: true })
    return this.http.request(request);
  }
}

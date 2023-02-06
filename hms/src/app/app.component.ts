import { Component, Inject, OnInit } from '@angular/core';
import {LocalStorageToken} from '../../localstorage.token'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(@Inject(LocalStorageToken) private localstorage:Storage){
    
  }
  ngOnInit(): void {
    this.localstorage.setItem('name','Sonargaon Hotel')
  }
  title = 'hms';
}

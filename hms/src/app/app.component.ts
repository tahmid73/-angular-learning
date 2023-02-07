import { Component, Inject, OnInit } from '@angular/core';
import {LocalStorageToken} from '../../localstorage.token'
import { InitService } from './init.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(@Inject(LocalStorageToken) private localstorage:Storage,
  private initService:InitService
  ){
    console.log(initService.config)

  }
  ngOnInit(): void {
    this.localstorage.setItem('name','Sonargaon Hotel')
  }
  title = 'hms';
}

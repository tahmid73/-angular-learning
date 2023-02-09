import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import {RouteConfig} from '../services/routeConfig.service'

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken )private configToken:RouteConfig) { 
    console.log('ConfigService initialzed')
    console.log(this.configToken )
  }
}

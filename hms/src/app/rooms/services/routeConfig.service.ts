import { InjectionToken } from "@angular/core";
import {RouteConfig} from '../services/routerConfig'

export const RouteConfigToken= new InjectionToken<RouteConfig>('routeConfig');

export { RouteConfig };

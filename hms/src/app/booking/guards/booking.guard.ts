import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<unknown> {
  
  constructor(private snakbar:MatSnackBar){}
  
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): 
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
    if(component.bookingForm.pristine){
      return component.bookingForm.pristine;
  }
  else{
    this.snakbar.open('Are you sure you want to leave?','Discard',{duration:3000})
    return false;
  }
  
}
}

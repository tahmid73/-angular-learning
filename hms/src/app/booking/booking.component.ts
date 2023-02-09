import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{
  bookingForm!:FormGroup;


  constructor(private fb:FormBuilder){}
  ngOnInit (): void {
    this.bookingForm=this.fb.group({
      bookingId: [''],
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guestCount: [''],
    })
  }
  
}

                                                                                                          

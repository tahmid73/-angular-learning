import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      bookingId: { value: '1', disabled: true },
      roomId: { value: '2', disabled: true },
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
        count: [''],
      }),
      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('') }),
      ]),
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }
  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }
}

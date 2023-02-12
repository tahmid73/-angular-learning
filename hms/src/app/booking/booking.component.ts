import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ConfigService } from '../rooms/services/config.service';
import { BookinngService } from './bookinng.service';

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

  constructor(
    private router:ActivatedRoute,
    private configService:ConfigService,
    private fb: FormBuilder,
    private bookingService:BookinngService
    ) {}
  ngOnInit(): void {
    const roomId=this.router.snapshot.paramMap.get('roomId');
    this.bookingForm = this.fb.group({
      bookingId: { value: '1', disabled: true },
      roomId: { value: roomId, disabled: true },
      guestEmail: ['',[Validators.required]],
      checkinDate: ['',[Validators.required]],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: ['',[Validators.required]],
      bookingDate: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required]],
      guestName: ['',[Validators.required]],
      address: this.fb.group({
        addressLine1: ['',[Validators.required]],
        addressLine2: [''],
        city: ['',[Validators.required]],
        state: ['',[Validators.required]],
        country: ['',[Validators.required]],
        zipCode: ['',[Validators.required]],
      }),
      guests: this.fb.array([
        this.addGuestControl()
      ]),
    });
    this.getBookingData()

    this.bookingForm.valueChanges.subscribe((data)=>{
      this.bookingService.bookRoom(data).subscribe((data)=>{})
    })

    this.bookingForm.valueChanges.pipe(
      mergeMap((data)=>this.bookingService.bookRoom(data))
    )
  }

  getBookingData(){
    this.bookingForm.patchValue({
      bookingId: '2',
      guestEmail: 'guest@mail.com',
      checkinDate: new Date('10-2-2023'),
      checkoutDate: new Date('10-2-2023'),
      bookingStatus: '',
      bookingAmount: '5000',
      bookingDate: new Date('10-2-2023'),
      mobileNumber: '123456789',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc:false
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{console.log(data)})
    // this.bookingForm.reset({
    //   bookingId: '2',
    //   roomId: '2',
    //   guestEmail: '',
    //   checkinDate: '',
    //   checkoutDate: '',
    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },
    //   guests: [],
    //   tnc:false
    // });
  }
  addGuest() {
    this.guests.push(
      this.addGuestControl()
    );}

  addGuestControl () {
      return this.fb.group({ guestName: [''], age: new FormControl('') });
    }
  
  addPassport(){
    this.bookingForm.addControl('passport',new FormControl(''));
  }
  deletePassport(){
    this.bookingForm.removeControl('passport')
  }
  removeGuest(i:number){
    this.guests.removeAt(i)
  }
}

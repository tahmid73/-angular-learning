import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean=false;
  constructor() { }

  login(email:string,password:string){
    if(email==="admin@gmail.com" && password==="123"){
      alert("logged in successfully");
      // localStorage.setItem('email',this.email)
      this.isLoggedIn=true
      // console.log(localStorage.getItem('email'))
    }
    return this.isLoggedIn;
}
}

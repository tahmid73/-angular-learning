import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email:string='';
  password:string='';
  ngOnInit (): void {
  }

  constructor(private route:Router,private loginService:LoginService){}

  login(){
    if(this.loginService.login(this.email,this.password)){
      this.route.navigate(['/rooms'])
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
@Component({
  selector: 'wcb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUrl;

  constructor(private router:Router, private loginService:LoginService) { 
    this.loginUrl=this.loginService.loginUrl;
  }
  

  ngOnInit() {
    
  }

  login(event){
    this.loginService.onlogin(event.detail.userInfo.get());
    this.router.navigate(['/people']);
  }

}

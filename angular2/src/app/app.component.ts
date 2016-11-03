import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wcb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  user;
  constructor(private router:Router, private loginService:LoginService) { 
    
  }

  ngOnInit(){
      this.loginService.userLogged$.subscribe(u=>{
          this.user=u;
      })
  }

  logout(){
    this.loginService.onlogout();
    this.router.navigate(['/login']);
  }
}

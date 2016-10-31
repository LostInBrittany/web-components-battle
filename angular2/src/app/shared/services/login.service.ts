import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

 
const BASE_URL = 'http://localhost:3001';

@Injectable()
export class LoginService {

  private _user=null;

  constructor(private http: Http) {}

  get loginUrl(){
    return `${BASE_URL}/api/login`;
  }

  get logoutUrl(){
    return `${BASE_URL}/api/logout`;
  }

  get user(){
    return this._user;
  }

  getObservableUser(){
    
  }

  isConnected(){
    return this._user!=null;
  }

  onlogin(user) {
    this._user=user;
  }

  onlogout() {
    this._user=null;
  }


}

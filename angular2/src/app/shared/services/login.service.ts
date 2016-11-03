import { Injectable, EventEmitter } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';

const BASE_URL = 'http://localhost:3001';

@Injectable()
export class LoginService {

  public userLogged$: EventEmitter<Object>;
  private _user=null;

  constructor(private http: Http) {
    this.userLogged$= new EventEmitter();
  }

  get loginUrl(){
    return `${BASE_URL}/api/login`;
  }

  get logoutUrl(){
    return `${BASE_URL}/api/logout`;
  }

  get user(){
    return this._user;
  }

  isConnected(){
    return this._user!=null;
  }

  onlogin(user) {
    this._user=user;
    this.userLogged$.emit(this._user);
  }

  onlogout() {
    this._user=null;
    this.userLogged$.emit(this._user);
  }


}

import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(userInfo: User){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public isLoggedIn(){
    return localStorage.getItem('userInfo') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httplogin:HttpClient) { }

  
  getlogin(datalogin:any){
    return this.httplogin.post('https://dummyjson.com/auth/login', datalogin);
  }
}

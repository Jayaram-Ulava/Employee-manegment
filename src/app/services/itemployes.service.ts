import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemployesService {

  constructor(private httpit:HttpClient) { }
// this is acountors service API  

  getitemployes(){
    return this.httpit.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
  }

}

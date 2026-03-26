import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private httpemployee:HttpClient) { }

  getAllEmployes(){
    return this.httpemployee.get('https://6572df5d192318b7db412dfe.mockapi.io/employees');
  }
}

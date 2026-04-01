import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor(private httpproduct:HttpClient) { }

  getAllProducts(){
    return this.httpproduct.get('https://dummyjson.com/products');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private httpemployee:HttpClient) { }

  getAllEmployes(){
    return this.httpemployee.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?limit=10&page=1');
  }

    getAllEmploye(id:any):Observable<any>{
    return this.httpemployee.get('https://6572df5d192318b7db412dfe.mockapi.io/employees/' + id);
  }

  searchEmployes(empname:any):Observable<any>{
    return this.httpemployee.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?filter='+empname);

  }

  sortemploye(colom:any, order:any ):Observable<any>{
return this.httpemployee.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy='+colom+'&order='+order); 
  }

  pagenactionemp(page:any, limit:any):Observable<any>{
return this.httpemployee.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?limit='+limit+'&page='+page);
  }
  deleteemp(id:any):Observable<any>{
    return this.httpemployee.delete('https://6572df5d192318b7db412dfe.mockapi.io/employees/'+id);

  }
  postemp(empdata:any):Observable<any>{
    return this.httpemployee.post('https://6572df5d192318b7db412dfe.mockapi.io/employees',empdata);
  }

  editeemp(id:any, empdata:any):Observable<any>{
    return this.httpemployee.put('https://6572df5d192318b7db412dfe.mockapi.io/employees/'+id,empdata);
  }
}

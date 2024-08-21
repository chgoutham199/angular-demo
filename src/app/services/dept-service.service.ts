import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {

  constructor(private http:HttpClient) { }

  getDept(){

    return this.http.get('https://dummyjson.com/products');
  }
  getDetailsById(id:any){
    console.log(id);
    return this.http.get('https://dummyjson.com/products/'+id);
  }
}

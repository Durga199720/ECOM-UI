import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //getProducts() {
    // return this.http.get<any>("https://fakestoreapi.com/products/")
    //   .pipe(map((res:any)=>{
    // return res;
    //   }))
  //} another way
  public getProduct(): Observable<any> {
    return this.http.get("https://fakestoreapi.com/products/");
  }
}


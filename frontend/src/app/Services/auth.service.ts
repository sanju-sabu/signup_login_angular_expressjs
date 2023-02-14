import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public  Logingeader:any;
  public gettoken:any="";
  private BaseUrl='http://localhost:3000'
  constructor(private http: HttpClient) { 
    this.gettoken=localStorage.getItem('token');
    this.Logingeader=  new HttpHeaders()
    .set("content-type", "application/json")
   .set("Access-Control-Allow-Origin", "*")
  }
  login(data:any):Observable<any>{
    console.log("Login Service");

    console.log(data);
    
    return this.http.post(`${this.BaseUrl}/api/login`,data)
  }
    signup(data:any):Observable<any>{
      return this.http.post(this.BaseUrl + '/api/Register',data)
    }
    getUserById(id:any):Observable<any>{
      return this.http.get(this.BaseUrl+ `/api/${id}`)
  }
}

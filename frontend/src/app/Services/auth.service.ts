import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BaseUrl='http://localhost:3000'
  constructor(private http: HttpClient) { }
  login(data:any):Observable<any>{
    console.log("Login Service");

    console.log(data);
    
    return this.http.post(`${this.BaseUrl}/api/login`,data)
  }
    signup(data:any):Observable<any>{
      return this.http.post(this.BaseUrl + '/api/Register',data)
    }
  }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }


    //api calling 
    //HttpClient --> method       

    //any user can be add 
    saveUser(user:any):Observable<any>{
      
      //node api 
      return this.httpClient.post("http://localhost:3000/users",user)
    }

    authenticate(user:any):Observable<any>{
     return this.httpClient.post("http://localhost:3000/login",user) 
    }
    //this will add only customer 
    saveCustomer(user:any):Observable<any>{
      return this.httpClient.post("http://localhost:3000/savecustomer",user)
      
    }

    sendOtpForPassword(user:any):Observable<any>{
      return this.httpClient.post("http://localhost:3000/sendotpforpassword",user)
    }
  }

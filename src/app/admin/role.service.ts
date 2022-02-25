import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private hc:HttpClient) { }


  addRole(role:any):Observable<any>{
   return this.hc.post("http://localhost:3000/roles",role)
  }
}

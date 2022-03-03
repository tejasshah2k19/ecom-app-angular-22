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


  getAllRoles():Observable<any>{
    return this.hc.get("http://localhost:3000/roles")
  }

  deleteRole(roleId:any):Observable<any>{
    return this.hc.delete("http://localhost:3000/roles/"+roleId)
  }

  getRoleById(roleId:any):Observable<any>{
    return this.hc.get("http://localhost:3000/roles/"+roleId)
  }


 updateRole(role:any):Observable<any>{
    return this.hc.put("http://localhost:3000/roles",role)
   }
 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles:Array<any> = []
  constructor(private roleService:RoleService,private tsService:ToastrService,private router:Router) {
    console.log("list roles ");
    

   }

  ngOnInit(): void {
          this.getAllRoles()
  }


  deleteRole(roleId:any){
        this.roleService.deleteRole(roleId).subscribe(resp=>{
          if(resp.status == 200 ){
              this.tsService.success("",resp.msg,{timeOut:3000});
              this.getAllRoles() 
          }else{
            this.tsService.error("",resp.msg,{timeOut:3000})
          }
        })
  }

  editRole(roleId:any){
    this.router.navigateByUrl("/editrole/"+roleId)
  }

  getAllRoles(){
    this.roleService.getAllRoles().subscribe(resp=>{
      console.log(resp);
       this.roles =  resp.data 
    }) 
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private roleService:RoleService,private router:Router,private ts:ToastrService) { }
  roleName:string =""
  ngOnInit(): void {
  }

  saveRole(){
    let role = {roleName:this.roleName} 
    this.roleService.addRole(role).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role 
        this.ts.success("",resp.msg,{
          timeOut:3000
        })
        this.router.navigateByUrl("/listrole")
      }else{

      }
      
    })

  }
}

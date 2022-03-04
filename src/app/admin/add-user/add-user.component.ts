import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private roleService: RoleService,private sessionService:SessionService,private tsService:ToastrService) { }


  firstName: string = ""
  email: string = ""
  password: string = ""
  role: string = ""
  gender: string = ""
  contactNum: string = ""
  roles: Array<any> = []

  ngOnInit(): void {
    this.getAllRoles()
  }

  saveUser() {
    let user = {
      "firstName":this.firstName,
      "email":this.email,
      "password":this.password,
      "gender":this.gender,
      "role":this.role,
      "contactNum":this.contactNum 
    }
    this.sessionService.saveUser(user).subscribe(resp=>{
      if(resp.status == 200){
          this.tsService.success("",resp.msg,{timeOut:3000})
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
 
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(resp => {
      this.roles = resp.data
      console.log(this.roles);

    })
  }

}

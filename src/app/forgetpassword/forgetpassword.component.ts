import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private sessionService:SessionService,private tsService:ToastrService,private router:Router) { }

  email:string=""

  ngOnInit(): void {
  }

  recoverPassword(){
    // alert(this.email)
    let user = {email:this.email}
    this.sessionService.sendOtpForPassword(user).subscribe(resp=>{

      if(resp.status == -1){
        this.tsService.error("",resp.msg,{timeOut:3000})
      }else{
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/changepassword")
        
      }
    })
  }

}

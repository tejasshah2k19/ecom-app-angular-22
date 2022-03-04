import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""
  constructor(private sessionService: SessionService, private tsService: ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    let user = { email: this.email, password: this.password }
    this.sessionService.authenticate(user).subscribe(resp => {
      if (resp.status == 200) {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        // console.log(resp);
        if (resp.data.role.roleName.toLowerCase() == "admin") { 
          this.router.navigateByUrl("/admin-dashboard")
        } else if (resp.data.role.roleName.toLowerCase() == "customer") {

          this.router.navigateByUrl("/home")
        } else if (resp.data.role.roleName.toLowerCase() == "vendor") {
          this.router.navigateByUrl("/vendor-dashboard")
        } else {

        }

      } else {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}

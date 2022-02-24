import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  login() {
    let user = {email:this.email,password:this.password}
    this.sessionService.authenticate(user)
  }

}

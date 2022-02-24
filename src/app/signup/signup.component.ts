import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string = ""
  email:string = ""
  password:string = ""

  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  saveuser(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
  
    let user = { "firstName":this.firstName,"email":this.email,"password":this.password}
    this.sessionService.saveUser(user)
     
  }

}

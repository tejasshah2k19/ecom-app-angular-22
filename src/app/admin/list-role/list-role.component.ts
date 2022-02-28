import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles:Array<any> = []
  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
           this.roleService.getAllRoles().subscribe(resp=>{
             console.log(resp);
              this.roles =  resp.data 
           }) 
  }

}

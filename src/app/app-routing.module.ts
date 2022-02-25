import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: LoginComponent },
  {path:"addrole",component:AddRoleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

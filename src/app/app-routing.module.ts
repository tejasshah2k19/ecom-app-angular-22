import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: LoginComponent },
  {path:"logout",component:LogoutComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"changepassword",component:ChangepasswordComponent},


  {
    path: "admin", component: AdminComponent, children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "addrole", component: AddRoleComponent },
      { path: "listrole", component: ListRoleComponent },
      { path: "editrole/:roleId", component: EditRoleComponent },
      { path: "adduser", component: AddUserComponent }
    ]
  },
{ path: "vendor-dashboard", component: VendorDashboardComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

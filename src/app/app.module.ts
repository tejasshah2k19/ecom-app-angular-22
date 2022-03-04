import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    AddCategoryComponent,
    EditRoleComponent,
    AdminDashboardComponent,
    VendorDashboardComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

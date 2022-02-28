import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

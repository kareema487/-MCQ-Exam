import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private http: HttpClient,
    private hero:HeroService
  ) { }

  passError: boolean = false;
  emailError: boolean = false;
  id: number = 0;
  
  loginForm = this.fb.group({
    role: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^\w{3,}@\w{3,}.com$/)]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}\w{7,}/)]]
  })

  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  get role() {
    return this.loginForm.get('role') as FormControl;
  }


  btnLogin(ev: Event) {
    ev.preventDefault();
    this.http.get<User[]>(
      `${this.hero._Url}users?role=${this.role.value}&email=${this.email.value}`)
      .subscribe(
        res => {
          if (res.length != 0) {
            this.id = res[0].id;
            if (res[0].password == this.password.value) {
              this.hero.login(this.id,this.email.value);
              this.route.navigateByUrl('/home')
            } else {
              this.passError = true;
            }
          } else {
            this.emailError = true;
            this.passError = false;
          }
        })
  }

  canExit(){
    if(this.loginForm.invalid&&(this.email.value||this.password.value ||this.role.value)){
      return confirm("You will lose any unsaved Changes Are you sure you want to Cancel ?")
    }else{
      return true;
    }
  }
}

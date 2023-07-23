import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from '../../Service/auth.service';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private route:Router,
    private auth:AuthService,
    private hero:HeroService
  ){}
  forgetForm=this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w{3,}@\w{3,}.com$/)]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}\w{7,}/)]],
    firstSchoolName: ['', [Validators.required, Validators.minLength(2)]],
    childhoodNickname: ['', [Validators.required, Validators.minLength(2)]],
    motherMiddleName: ['', [Validators.required, Validators.minLength(2)]],
  });
  emailError:boolean=false;
  q1Error:boolean=false;
  q2Error:boolean=false;
  q3Error:boolean=false;
  showSearch:boolean=true;
  showQ1:boolean=false;
  showQ2:boolean=false;
  showQ3:boolean=false;
  showReset:boolean=false;
  
  data:User|null=null;
  checkEmail(){
    
    this.http.get<User[]>(`${this.hero._Url}users?email=${this.email.value}`).subscribe((res:User[])=>{
      if(res.length!=0){
        this.data=res[0];
        this.showSearch=false;
        this.showQ1=true;
        this.emailError=false;
      }else{
        this.emailError=true;
      }
    })
  }
  checkQ1(){
    if(this.data?.securityQuestions.firstSchoolName==this.firstSchoolName.value){
      this.showQ1=false;
      this.showQ2=true;
      this.q1Error=false;
    }else{
      this.q1Error=true;
    }
  }
  checkQ2(){
    if(this.data?.securityQuestions.childhoodNickname==this.childhoodNickname.value){
      this.showQ2=false;
      this.showQ3=true;
      this.q2Error=false;
    }else{
      this.q2Error=true;
    }
  }
  checkQ3(){
    if(this.data?.securityQuestions.motherMiddleName==this.motherMiddleName.value){
      this.showQ3=false;
      this.showReset=true;
      this.q3Error=false;
    }else{
      this.q3Error=true;
    }
  }
  resetPassword(){
  
    this.http.patch(`${this.hero._Url}users/${this.data?.id}`,{'password':this.password.value}).subscribe(res=>{
      alert("Reset Password Done !!");
     if(this.data!=null){

       this.auth.login(this.data.id,this.data.email);
       this.route.navigateByUrl('home');
     }
    })
  }
  get email(){
    return this.forgetForm.controls.email as FormControl;
  }
  get childhoodNickname(){
    return this.forgetForm.controls.childhoodNickname as FormControl;
  }
  get firstSchoolName(){
    return this.forgetForm.controls.firstSchoolName as FormControl;
  }
  get motherMiddleName(){
    return this.forgetForm.controls.motherMiddleName as FormControl;
  }
  get password(){
    return this.forgetForm.controls.password as FormControl;
  }



}



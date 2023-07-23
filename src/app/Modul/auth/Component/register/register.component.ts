import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
  ) { }

  registerForm = this.fb.group({
    role: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(/^\w{3,}@\w{3,}.com$/)]],
    gender: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^(011|012|010|013|015)[0-9]{8}$/)]],
    age: ['', [Validators.required, Validators.min(15), Validators.max(55)]],
    securityQuestions: this.fb.group({
      firstSchoolName: ['', [Validators.required, Validators.minLength(2)]],
      childhoodNickname: ['', [Validators.required, Validators.minLength(2)]],
      motherMiddleName: ['', [Validators.required, Validators.minLength(2)]],
    }),
    userName: ['', [Validators.required, Validators.pattern(/^\w{3,}\ \w{3,}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}\w{7,}/)]],
    address: this.fb.group({
      state: ['', [Validators.required, Validators.pattern(/^\w{3,}$/)]],
      city: ['', [Validators.required, Validators.pattern(/^\w{3,}$/)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^\w{3,}$/)]]
    })
  })


  userdata: any;
  id: number = 0;
  addUser() {
    this.userdata = { ...this.registerForm.value };
    this.auth.addUser(this.userdata).subscribe((res => {
      this.id = res.id;
      this.auth.login(res.id,res.email);
  
      this.route.navigateByUrl("home");

    }));
  }
  get role() {
    return this.registerForm.controls.role as FormControl;
  }

  get email() {
    return this.registerForm.controls.email as FormControl;
  }
  get gender() {
    return this.registerForm.controls.gender as FormControl;
  }
  get phone() {
    return this.registerForm.controls.phone as FormControl;
  }
  get age() {
    return this.registerForm.controls.age as FormControl;
  }
  get firstSchoolName() {
    return this.registerForm.controls.securityQuestions.controls.firstSchoolName as FormControl;
  }
  get childhoodNickname() {
    return this.registerForm.controls.securityQuestions.controls.childhoodNickname as FormControl;
  }
  get motherMiddleName() {
    return this.registerForm.controls.securityQuestions.controls.motherMiddleName as FormControl;
  }
  get password() {
    return this.registerForm.controls.password as FormControl;
  }
  get userName() {
    return this.registerForm.controls.userName as FormControl;
  }

  get state() {
    return this.registerForm.controls.address.controls.state as FormControl;
  }
  get city() {
    return this.registerForm.controls.address.controls.city as FormControl;
  }
  get postalCode() {
    return this.registerForm.controls.address.controls.postalCode as FormControl;
  }


  
  canExit() {
    if (this.registerForm.invalid && (
      this.email.value || this.role.value || this.userName.value || this.age.value
      || this.phone.value || this.password.value || this.gender.value || this.city.value
      || this.state.value || this.postalCode.value || this.motherMiddleName.value
      || this.childhoodNickname.value || this.firstSchoolName.value
      )
    ) {

      return confirm("You will lose any unsaved Changes Are you sure you want to Cancel ?")
    } else {
      return true;
    }
  }


}
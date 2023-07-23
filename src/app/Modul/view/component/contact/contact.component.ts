import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private hero:HeroService
    ){}
  contact=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    message:['',[Validators.required]],
  })
  get name(){
    return this.contact.controls.name as FormControl;
  }
  get email(){
    return this.contact.controls.email as FormControl;
  }
  get phone(){
    return this.contact.controls.phone as FormControl;
  }
  get message(){
    return this.contact.controls.message as FormControl;
  }

  send(){
    this.hero.addData('feedback',this.contact.value).subscribe((res)=>{
      this.route.navigateByUrl('home');
    })
  
  }

  canExit(){
    if(this.contact.invalid&&(this.name.value||this.email.value||this.phone.value||this.message.value)){
      return confirm("You will lose any unsaved Changes Are you sure you want to Cancel ?")
    }else{
      return true;
    }
  }
}

import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Modul/auth/Service/auth.service';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{
  constructor(private auth:AuthService,private hero:HeroService,private activatedaroute:ActivatedRoute){

  }
  ngDoCheck(): void {
    this.id=this.hero.id;
    this.email=this.hero.email;
  }
 
  

id:number=0;
email:string='';

   logout(){
    if(confirm("Are you Sure you want to  log out")){
      this.hero.logout();
    }
    

  }
}

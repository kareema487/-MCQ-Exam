import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  Teams:any;
  constructor(private heroService:HeroService){}
  ngOnInit(): void {
    this.heroService.getAll("Teams").subscribe({
      next : (response)=>{this.Teams=response},
      error : (myError)=> {console.log(myError)},
      
     });
     
  }
}

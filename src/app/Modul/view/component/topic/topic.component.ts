import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  Topics : any;
constructor(private heroService:HeroService){}
  ngOnInit(): void {
    this.heroService.getAll("Topics").subscribe({
      next : (response)=>{this.Topics=response},
      error : (myError)=> {console.log(myError)},
      
     });
     
  }
  
}

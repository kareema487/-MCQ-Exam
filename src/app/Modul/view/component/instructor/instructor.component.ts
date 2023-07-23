import { HeroService } from './../../../../service/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit{
  instructors:any;
  constructor(private heroService:HeroService) {}

  ngOnInit(): void {
    this.heroService.getAll("instructors").subscribe({
      next:(response)=>{this.instructors=response},
      error:(MyError)=>{}
    });
  }

}

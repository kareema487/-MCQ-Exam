import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  topicId : any ;
  topic : any ;
  exam : any ;
  flag : boolean = false ;
  isChecked : boolean = false ;

  constructor(private hero : HeroService, private activatedRoute:ActivatedRoute ,private router:Router){}
  ngOnInit(): void {
    this.topicId = this.activatedRoute.snapshot.paramMap.get('id');
    this.hero.getById("Topics",Number(this.topicId)).subscribe({
      next: (response)=>{this.topic=response
      },
      error : (myError)=>{console.log(myError);
      }
    })

    this.hero.getById('Exams', Number(this.topicId)).subscribe({
      next: (response) => {
        this.exam = response ;

      },
      error: (myError) => {
        console.log(myError);
      },
    });

    
  }

  testCheck(){
    if(this.isChecked == true){
      this.flag = false ;
    }else{
      this.flag = true ;
    }
  }
  takeExam(){
    if (this.isChecked== true) {
      this.router.navigate(['topics/'+this.topicId+'/question']);
    }else {
      this.flag = true
    }
  }
}

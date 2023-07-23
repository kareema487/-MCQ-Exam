import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  totalQuestions: number = 0;
  attemptedQuestions: number = 0;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  unattemptedQuestions: number = 0;
  topic: any;
  topicId: any;
  exam: any;
  minSpent: number = 0;
  secSpent: number = 0;
  finalMinSpent: number = 0;
  finalSecSpent: number = 0;
  duration: number = 0;
  summaryId : any  ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hero: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, '', window.location.href);
    };

  
   
   this.activatedRoute.paramMap.subscribe(response =>  this.summaryId = response.get("summaryId") )
    this.hero.getById("summary",this.summaryId).subscribe({
    next: (response :any) => {
      this.correctAnswers = response.correctAnswer;
      this.attemptedQuestions = response.attempt;
      this.minSpent = response.min ;
      this.secSpent = response.sec;
      this.totalQuestions = response.totalQuestions;
      this.unattemptedQuestions = this.totalQuestions - this.attemptedQuestions;
      this.incorrectAnswers = this.attemptedQuestions - this.correctAnswers;


      this.activatedRoute.paramMap.subscribe(
        (result) => (this.topicId = result.get('id'))
      );
      this.hero.getById('Topics', Number(this.topicId)).subscribe({
        next: (response) => {
          this.topic = response;
          this.duration = this.topic.durationExam;
          this.finalMinSpent = this.duration - 1 - this.minSpent;
          this.finalSecSpent = 60 - this.secSpent;
          if (this.finalSecSpent == 60) {
            this.finalSecSpent = 0;
            this.finalMinSpent++;
          }
        },
        error: (myError) => {
          console.log(myError);
        },
      });



    },
    
    error : (myError)=> console.log(myError)
    
    })

   
  }
}

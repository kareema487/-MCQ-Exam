import { SummaryComponent } from './../summary/summary.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { __await } from 'tslib';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  questionVal: any;
  Questions: any;
  i: number = 0;
  // examName: string = '';
  duration: any;
  topic: any;
  topicId: string | null = '';
  minutes: number = 0;
  seconds: number = 0;
  userAns: string = '';
  userAnswers: string[] = [];
  correctAnswers: string[] = [];
  score: number = 0;
  attempted: number = 0;
  sandWatch: any;
  image: string = '';
  flag: boolean = false;
  topicName: string = '';
  totalQuestions: number = 0;
  summaryId: number = 0;

  //  constructor
  constructor(
    private hero: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // oninit (initialization)
  ngOnInit(): void {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, '', window.location.href);
    };

    this.topicId = this.activatedRoute.snapshot.paramMap.get('id');
    this.hero.getById('Exams', Number(this.topicId)).subscribe({
      next: (response) => {
        this.questionVal = response;
        this.Questions = this.questionVal.question;
        this.totalQuestions = this.Questions.length;
        for (let i = 0; i < this.Questions.length; i++) {
          this.correctAnswers.push(this.Questions[i].correctAns);
        }
      },
      error: (myError) => {
        console.log(myError);
      },
    });
    this.topic = this.hero
      .getById('Topics', Number(this.topicId))
      .subscribe((response) => {
        this.topic = response;
        this.minutes = Number(this.topic.durationExam);
        this.image = this.topic.icon;
        this.topicName = this.topic.name;
      });

    this.sandWatch = window.setInterval(() => {
      this.timer();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.sandWatch);
  }

  // methods
  timer() {
    this.seconds--;
    if (this.seconds < 0) {
      this.seconds = 59;
      this.minutes--;
    }
    if (this.seconds < 10) {
      this.seconds = Number('0' + this.seconds);
    }
    if (this.minutes == 0 && this.seconds == 0) {
      this.endExam();
    }
  }

  nextQuestion() {
    this.i++;
    if (this.i >= this.Questions.length - 1) {
      this.i = this.Questions.length - 1;
    }
  }

  prevQuestion() {
    this.i--;
    if (this.i < 0) {
      this.i = 0;
    }
  }

  showSure() {
    this.flag = true;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i] != null) {
        this.attempted++;
      }
    }
  }
  hideSure() {
    this.flag = false;
  }
  endExam() {
    for (let i = 0; i < this.correctAnswers.length; i++) {
      if (this.userAnswers[i] == this.correctAnswers[i]) {
        this.score++;
      }
    }
    this.attempted = 0 ;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (this.userAnswers[i] != null) {
        this.attempted++;
      }
    }

    this.hero
      .addData('summary', {
        correctAnswer: `${this.score}`,
        attempt: `${this.attempted}`,
        min: `${this.minutes}`,
        sec: `${this.seconds}`,
        topicName: `${this.topicName}`,
        totalQuestions: `${this.totalQuestions}`,
      })
      .subscribe((response: any) => {
        this.summaryId = response.id;
        console.log(response.id + ' =================> id  ');
        this.router.navigate([`topics/${this.topicId}/question/summary/${this.summaryId}`]);
      });
  }
}

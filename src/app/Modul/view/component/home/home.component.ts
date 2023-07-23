import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Slider: any;
id:any;
  constructor(private activatedRoute:ActivatedRoute) {
  }  
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      (value)=>{
        if(document.getElementById(''+value)){
          document.getElementById(''+value)?.scrollIntoView({behavior:'smooth'});
        }     
    })
  }

}

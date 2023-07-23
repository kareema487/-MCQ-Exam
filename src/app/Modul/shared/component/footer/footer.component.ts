import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
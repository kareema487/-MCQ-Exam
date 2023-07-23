import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

desc:string=`We are a programming courses company that offers high-quality
education and training in various programming languages, frameworks,
and tools.`

desc2:string= `Our experienced instructors provide hands-on learning
and real-world applications in an engaging and supportive environment,
helping students develop the skills they need to succeed in the programming industry`

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

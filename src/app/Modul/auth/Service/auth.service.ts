import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/Models/user';
import { HeroService } from 'src/app/service/hero.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private hero:HeroService) { }
id:number=0;
email:string='';


  login(id:number,email:string):Observable<number>{
    this.id=id;
    this.email=email;
    return this.hero.login(id,email)
  }


  getUser(id:number):Observable<User>{
    return this.hero.getById('users',id);
  }

  addUser(data:User):Observable<any>{
  return this.hero.addData('users',data);
  }
}

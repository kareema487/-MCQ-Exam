import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// /users 3x
// /Topics 3x
// /instructors 3x
// /Exams 3x
// /summary 1x

export class HeroService {
  _Url : string = "http://localhost:3500/";
  id:number=0;
  email:string='';
  constructor(private _http:HttpClient) { }
  login(id:number,email:string):any{
    this.id=id;
    this.email=email;
    console.log("data from hero id= ",this.id,", email = ",this.email)
    // alert("in hero id ="+id)
  }
  logout(){
    this.id=0;
    this.email='';
  }
  getId():Observable<User>{
  
    return  this._http.get<User>(`${this._Url}users/${this.id}`).pipe(
      catchError(err=>{
        return throwError(err.Message||'sever not Found');
      })
    )
  }
  getAll(key :string):Observable<any[]> {
    return this._http.get<any[]>(`${this._Url}${key}`).pipe(
      catchError(err=>{
        return throwError(err.Message||'sever not Found');
      })
    )
  }

  getById(key:string , id :number):Observable<any>{
    return this._http.get<any>(`${this._Url}${key}/${id}`).pipe(
      catchError(err=>{
        return throwError(err.Message||'sever not Found');
      })
    )
  }

  addData(key :string , data : any) {
    return this._http.post(`${this._Url}${key}`,data)
  }

  editData(key :string , id : number , data:any) {
    return this._http.put(`${this._Url}${key}/${id}`,data)
  }

  deleteData(key :string , id : number) {
    return this._http.get(`${this._Url}${key}/${id}`)
  }

}




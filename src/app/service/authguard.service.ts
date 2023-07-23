import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Modul/auth/Service/auth.service';
import { HeroService } from './hero.service';
import { LoginComponent } from '../Modul/auth/Component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate, CanActivateChild,Resolve<any>{
  // export class AuthguardService implements CanActivate {

  constructor(private _hero: HeroService, private route: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // alert("resolve done id ="+this._hero.id);
    
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this._hero.id == 0) {
        if (confirm("you need to login")) {
        this.route.navigateByUrl('login');
        return true
      } else {
        return false;
      }

    } else {
      return true;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this._hero.id == 0) {
      alert('You need to login');
      return false;
    } else {
      return true;
    }
  }
}

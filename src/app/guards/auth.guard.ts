import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EntityService } from '../services/entity.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private entityService: EntityService,
    private route: ActivatedRoute,
    private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let activate = false;
    let jwtHelper = new JwtHelperService();
    var token = localStorage.getItem('token');
    if (token) {
      activate = !jwtHelper.isTokenExpired(token);
    }
    if (activate)
      return activate;
    this.router.navigate(['/login'], { queryParams: { src: state.url } });
    return false;
  }

}

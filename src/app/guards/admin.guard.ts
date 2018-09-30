import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EntityService } from '../services/entity.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private entitySerivice: EntityService,
    private toastr: ToastrService,
    private router: Router) { }

  ADMIN_ROLE: string = "ADMINISTRATOR";

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let jwtHelper = new JwtHelperService();
    var token = localStorage.getItem('token');
    var decodedToken = jwtHelper.decodeToken(token);
    if (decodedToken.role && decodedToken.role === this.ADMIN_ROLE)
      return true;
    this.router.navigate(['/login']);
    localStorage.removeItem("token");
    this.toastr.error('Permission denied');
    return false;
  }
}

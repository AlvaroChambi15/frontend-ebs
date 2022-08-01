import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    protected router: Router,
    protected authservice: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    try {

      let token = localStorage.getItem("token");

      if (token) {
        this.router.navigate(["/sisebs/perfil"]);
      } else {
        return true
      }

    } catch (error) {

      // TODO: Eliminar el token de la bbdd  UMMMH
      this.authservice.logout();

      localStorage.removeItem("token");
      return true;
    }

    return true;
  }

}

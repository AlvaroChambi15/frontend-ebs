import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { decrypt } from '../util/util-encrypt';

@Injectable({
  providedIn: 'root'
})
export class RouteRoleGuard implements CanActivate {

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // let a = route.data["role"];

    return this.checkUserLogin(route);
  }

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {

    let user = JSON.parse(atob(decrypt(localStorage.getItem("c_user")!)!));
    let permisoUser = user.role;

    let permisosRequired = route.data['role'];

    console.log("Rol del usuario: " + permisoUser);
    console.log("Rol que se requiere es:" + permisosRequired);


    // const { scopes = [] } = permisoUser;
    // console.log(scopes.includes(route.data['role']));


    console.log(permisosRequired.includes(permisoUser));

    if (permisosRequired.includes(permisoUser)) {
      return true;
    } else {
      this.router.navigate(['/sisebs/sinAcceso'])
      return false;
    }

  }

}
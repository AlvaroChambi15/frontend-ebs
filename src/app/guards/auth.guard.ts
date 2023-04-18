import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  tokenStatus: any;

  constructor(
    protected router: Router,
    private authService: AuthService
  ) {

    //PRUEBAAAAA
    // this.authService.verificarToken().subscribe(
    //   (res: any) => {
    //     console.log(res)
    //     if (res == 1) {
    //       console.log("HAY TOKEN");
    //       this.tokenStatus = "SI";
    //     } else {
    //       console.log("No hay Token");
    //       this.tokenStatus = "NO";
    //     }
    //   },
    //   (error: any) => {
    //     console.log(error)
    //   }
    // );

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // TODO: VERIFICAR SI EL TOKEN ES VALIDO, Y SI ES, DEJAR INGRESAR DE LO CONTRARIO NO  // PRUEBAAA
    try {

      let token = localStorage.getItem("session");
      if (token) {
        return true;
      }

      // if (this.tokenStatus = "SI") {  //PRUEBAAAA
      //   return true;
      // }

      localStorage.removeItem("session");
      localStorage.removeItem("c_user");
      this.router.navigate(["/auth/login"]);

    } catch (error) {

      localStorage.removeItem("session");
      localStorage.removeItem("c_user");
      this.router.navigate(["/auth/login"]);
      return false;
    }

    return false;
  }

}

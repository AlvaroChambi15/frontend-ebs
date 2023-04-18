import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem("session");
    let token1 = atob(token!)
    let tokenizedReq = request.clone({
      setHeaders: {
        'Acept': 'application/json',
        'Authorization': 'Bearer ' + token1
      }
    });

    return next.handle(tokenizedReq).pipe(tap(() => { },

      (error: any) => {
        console.log("ERRORRRR", error);
        console.log(error instanceof HttpErrorResponse);
        console.log(error.status);

        if (error instanceof HttpErrorResponse) {
          // console.log(error.status);

          if (error.status !== 401) {
            return
          }

          //eliminando el token en la base de datos
          this.authService.logout()

          // this.router.navigate(["/noexiste"])


          localStorage.removeItem("session");
          localStorage.removeItem("c_user");
          this.router.navigate(["/auth/login"])



        }

      }

    ))
  }
}

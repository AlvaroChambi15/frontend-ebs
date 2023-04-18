import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment"
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // WEB
  btnReservarWeb: boolean = true;
  stepSoliIndex: number = 0;

  urlBase = environment.servidor;
  // token = localStorage.getItem("token")

  profileUser: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(datos: any) {
    return this.http.post(`${this.urlBase}/v1/auth/login`, datos);
  }

  perfil() {
    return this.http.get(`${this.urlBase}/v1/auth/perfil`);
  }

  logout() {
    let datos = { token: localStorage.getItem("token") }
    return this.http.post(`${this.urlBase}/v1/auth/logout`, datos);
  }

  verificarToken() {
    let datos = { token: localStorage.getItem("token") }
    return this.http.post(`${this.urlBase}/v1/auth/token-verify`, datos);
  }

}

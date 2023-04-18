import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  urlBase = environment.servidor

  constructor(private http: HttpClient) { }

  showSoicitudes(page: any, dato1: any) {
    // alert(datos);
    // console.log("estos son los datos de showSolicitudes SERVICE:" + dato1);

    // return this.http.post(`${this.urlBase}/v1/auth/solicitudes?page=${page}`, datos);
    return this.http.post(`${this.urlBase}/v1/auth/solicitudes?page=${page}`, dato1);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  urlBase = environment.servidor

  constructor(private http: HttpClient) { }

  storeSolicitud(datos: any) {
    return this.http.post(`${this.urlBase}/soli`, datos);
  }

}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
import * as AOS from 'aos';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
  providers: [MessageService]
})
export class WebComponent implements OnInit {

  constructor(
    private _cargarScript: CargarScriptsService,
    public authService: AuthService,
    private messageService: MessageService
  ) {
    // _cargarScript.carga(["menu"]);
  }

  ngOnInit(): void {
    this.toTop();
    this.authService.btnReservarWeb = true;

    AOS.init();

  }

  /*   showSuccess() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    } */

  showSuccess() {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Solicitud Enviada!',
      text: 'Tu solicitud ha sido recibida, nos pondremos en contacto con usted a la brevedad, para confirmar la cita! 😊',
      showConfirmButton: true,
      timer: 15000
    })
  }





  // IR AL INICIO DEL SCROLL
  toTop() {
    window.scrollTo(0, 0)
  }

}

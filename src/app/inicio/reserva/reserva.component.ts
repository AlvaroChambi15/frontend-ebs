import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SolicitudService } from 'src/app/core/services/solicitud.service';
import Swal from 'sweetalert2';

interface Tratamientos {
  name: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})


export class ReservaComponent implements OnInit {

  chargin: boolean = false;

  items: MenuItem[] = [];

  // letrasEspacio: RegExp = /[^0-9]$/;
  // VALIDACIONES DE INPUT
  letrasEspacio: RegExp = /[a-zA-Zñóí\s]$/;
  celular: RegExp = /^[6-7][0-9]*$/;

  subscription: Subscription = new Subscription;

  personalInformation: any;

  submitted: boolean = false;

  tratamientos: Tratamientos[];

  minDate!: Date;
  maxDate!: Date;
  manana!: Date;

  termConditions: boolean = false;

  showCondicionesModal: boolean = false;

  // stepsIndex: number = 0;

  cardPersonal: boolean = false;
  cardContactos: boolean = false;
  cardCita: boolean = false;
  cardConfirm: boolean = false;

  /*   solicitudForm: FormGroup = new FormGroup({
      nombres: new FormControl('hola', Validators.required)
    }) */

  solicitudForm: FormGroup = this.fb.group({
    nombres: [, [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    apellidos: [, [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    edad: [, [Validators.required]],
    email: [, [Validators.email, Validators.maxLength(80)]],
    celular: [, [Validators.required, Validators.minLength(8)]],
    contactTelefono: [false,],
    contactWsp: [false,],
    contactEmail: [false,],
    tratamiento: [, [Validators.required]],
    fecha: [, [Validators.required]],
    fechaSoli: [, [Validators.required]],
    hora: ['15:00', [Validators.required]],
    horaSoli: ['15:00', [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]]
  })

  constructor(
    private _cargarScript: CargarScriptsService,
    private fb: FormBuilder,
    private messageService: MessageService,
    public authService: AuthService,
    private solicitudService: SolicitudService,
    private router: Router) {
    // _cargarScript.carga(["menu"]);
    this.tratamientos = [
      { name: 'CONSULTA GENERAL' },
      { name: 'Limpieza Dental' },
      { name: 'Blanqueamiento Dental' },
      { name: 'Endodoncia' },
      { name: 'Ortodoncia' },
      { name: 'Protesis' },
      { name: 'Otro' }
    ];
  }

  ngOnInit(): void {

    this.authService.btnReservarWeb = false;

    this.items = [{
      label: 'Personal',
      // routerLink: 'personal'
    },
    {
      label: 'Contacto',
      // routerLink: 'seat'
    },
    {
      label: 'Cita',
      // routerLink: 'payment'
    },
    {
      label: 'Confirmación',
      // routerLink: 'confirmation'
    }
    ];

    this.minDate = new Date();
    this.manana = new Date(this.minDate.getTime() + 24 * 60 * 60 * 1000);

    this.cargarCard(this.authService.stepSoliIndex);

  }

  cargarCard(index: number) {
    switch (index) {
      case 0: {
        this.cardPersonal = true;
        break;
      }
      case 1: {
        this.cardContactos = true;
        break;
      }
      case 2: {
        this.cardCita = true;
        break;
      }
      case 3: {
        this.cardConfirm = true;
        break;
      }

      default: {
        break;
      }
    }
  }

  nextCard(cardActual: number) {
    switch (cardActual) {
      case 0: {
        // VERIFICAMOS QUE LOS DATOS ESTEN VALIDOS PARA IR A LA SIGUIENTE TARJETA
        if (this.solicitudForm.controls['nombres'].invalid || this.solicitudForm.controls['apellidos'].invalid || this.solicitudForm.controls['edad'].invalid) {
          this.solicitudForm.controls['nombres'].markAsTouched();
          this.solicitudForm.controls['apellidos'].markAsTouched();
          this.solicitudForm.controls['edad'].markAsTouched();
          return;
        }
        console.log(this.solicitudForm.controls['nombres'].value);
        console.log(this.solicitudForm.controls['apellidos'].value);
        console.log(this.solicitudForm.controls['edad'].value);
        // REDIRECCIONANDO A LA SIGUIENTE TARJETA
        this.authService.stepSoliIndex = 1;
        break;
      }
      case 1: {
        // VERIFICAMOS QUE LOS DATOS ESTEN VALIDOS PARA IR A LA SIGUIENTE TARJETA
        if (this.solicitudForm.controls['email'].invalid || this.solicitudForm.controls['celular'].invalid) {
          this.solicitudForm.controls['email'].markAsTouched();
          this.solicitudForm.controls['celular'].markAsTouched();
          return;
        }
        console.log(this.solicitudForm.controls['email'].value);
        console.log(this.solicitudForm.controls['celular'].value);
        // REDIRECCIONANDO A LA SIGUIENTE TARJETA
        this.authService.stepSoliIndex = 2;
        break;
      }
      case 2: {
        // VERIFICAMOS QUE LOS DATOS ESTEN VALIDOS PARA IR A LA SIGUIENTE TARJETA
        if (this.solicitudForm.controls['tratamiento'].invalid || this.solicitudForm.controls['fecha'].invalid || this.solicitudForm.controls['hora'].invalid) {
          this.solicitudForm.controls['tratamiento'].markAsTouched();
          this.solicitudForm.controls['fecha'].markAsTouched();
          this.solicitudForm.controls['hora'].markAsTouched();
          return;
        }

        // this.solicitudForm.patchValue({ tratamiento: this.solicitudForm.value.tratamiento.name });


        console.log(this.solicitudForm.controls['tratamiento'].value);
        console.log(this.solicitudForm.controls['fecha'].value);
        console.log(this.solicitudForm.controls['hora'].value);
        // REDIRECCIONANDO A LA SIGUIENTE TARJETA
        this.authService.stepSoliIndex = 3;
        break;
      }
      default: {
        break;
      }
    }
  }

  backCard(cardActual: number) {
    switch (cardActual) {
      case 1: {
        this.authService.stepSoliIndex = 0;
        break;
      }
      case 2: {
        this.authService.stepSoliIndex = 1;
        break;
      }
      case 3: {
        this.authService.stepSoliIndex = 2;
        break;
      }
      default: {
        break;
      }
    }
  }

  // GUARDAR
  guardarSolicitud() {


    if (this.solicitudForm.controls['condiciones'].invalid) {
      this.solicitudForm.controls['condiciones'].markAsTouched();
      return;
    }

    this.chargin = true;
    this.desactivarScroll();

    console.log(this.solicitudForm.value.fecha);
    console.log(this.solicitudForm.value.hora);


    // CONVIRTIENDO EL FORMATO DE FECHA GMT A UN STRING
    var fechaTrat = this.solicitudForm.value.fecha;
    if (fechaTrat.length == undefined) {
      var fechaYear = fechaTrat.getFullYear();
      var fechaMonth = fechaTrat.getMonth() + 1;
      var fechaDay = fechaTrat.getDate();
      const fechaSoli = fechaYear + '-' + fechaMonth + '-' + fechaDay;
      this.solicitudForm.patchValue({ fechaSoli: fechaSoli });
    }
    // 
    // console.log('============================');


    // CONVIRTIENDO EL FORMATO DE HORA GMT A UN STRING
    var fechaTrat = this.solicitudForm.value.hora;
    if (fechaTrat.length !== 5) {
      var fechaHora = fechaTrat.getHours();
      var fechaMinuto = fechaTrat.getMinutes();
      var fechaSeg = fechaTrat.getSeconds() + '0';
      const horaSoli = fechaHora + ':' + fechaMinuto + ':' + fechaSeg;
      this.solicitudForm.patchValue({ horaSoli: horaSoli });
    }
    if (fechaTrat.length == 5) {
      this.solicitudForm.patchValue({ horaSoli: fechaTrat + ':00' });
    }
    // 


    console.log(this.solicitudForm.value);


    this.solicitudService.storeSolicitud(this.solicitudForm.value).subscribe(
      (res: any) => {
        this.showSuccess();

        this.authService.stepSoliIndex = 0;

        console.log(res);

        this.router.navigate([""]);

        this.solicitudForm.reset();

        this.chargin = false;
        this.activarScroll();


      },
      (error: any) => {
        console.log(error)
        alert(error);
        this.chargin = false;
        this.activarScroll();
      }
    )

  }




  closeModalCondicions() {
    this.solicitudForm.patchValue({ condiciones: true });
    this.showCondicionesModal = false;
  }

  campoValidando(campo: string) {
    return this.solicitudForm.get(campo)?.errors && this.solicitudForm.get(campo)?.touched
    // this.solicitudForm.controls[campo].errors && this.solicitudForm.controls[campo].touched;
  }







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

  desactivarScroll() {
    var obj = document.getElementById("body")!;
    obj.style["overflow"] = "hidden";
  }

  activarScroll() {
    var obj = document.getElementById("body")!;
    obj.style["overflow"] = "";
  }

}

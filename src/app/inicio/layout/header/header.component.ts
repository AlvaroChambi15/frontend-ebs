import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService, MessageService],
})
export class HeaderComponent implements OnInit {

  menuHeader: boolean = false;


  constructor(
    private _cargarScript: CargarScriptsService,
    public authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    // this._cargarScript.carga(["menu"]);
  }

  openMenu() {
    this.menuHeader = true;
  }


  goToLogin() {
    let token = localStorage.getItem("token");



    if (token) {
      console.log("HAY TOKEN");

      this.authService.verificarToken().subscribe(
        (res: any) => {
          console.log("estoRES");
          console.log(res)
          /*           console.log("DATOS DE VERIFICACION");
                    console.log(res.Datos); */
          if (res.Datos == null) {


            // alert("Ocurrio un error al conectar con el Servidor Backend :(");

            localStorage.removeItem("token");
            this.router.navigateByUrl('/auth/login');
          } else {

            this.router.navigateByUrl('/sisebs');
          }

        },
        (error: any) => {
          console.log("estoERROR");
          console.log(error)

          // this.authService.logout()
          alert("Ocurrio un error al conectar con el Servidor Backend :(");
        }
      )

    } else {
      console.log("NO HAY TOKEN");
      this.router.navigateByUrl('/auth/login');
    }
  }

  scroll(part: string) {
    this.menuHeader = false;
    if (part == 'Inicio') {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('#' + part);
    }
  }

}

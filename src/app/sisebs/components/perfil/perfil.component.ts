import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { decrypt, encrypt } from 'src/app/util/util-encrypt';
import { environment } from 'src/environments/environment';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil: any;

  datoUser: any;
  keyEnviromentCript: any;
  keyEnviromentDecript: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getProfile();

    let keyEnviroment = environment.keycript;

    this.keyEnviromentCript = encrypt(keyEnviroment);

    this.keyEnviromentDecript = decrypt(this.keyEnviromentCript);


  }

  getProfile() {


    let user = JSON.parse(atob(decrypt(localStorage.getItem("c_user")!)!));
    this.datoUser = "El dato que se tiene es: " + user.name;



    this.authService.perfil().subscribe(
      (res: any) => {
        console.log(res)

        console.log(atob(res.user));


        this.perfil = JSON.parse(atob(res.user));
      },
      (error: any) => {
        console.log(error)

        this.router.navigate(["/auth/login"]);
      }
    )
  }

  logout() {

    let datos = { token: localStorage.getItem("session") }

    this.authService.logout().subscribe(
      (res: any) => {
        console.log(res)

        localStorage.removeItem("session");
        localStorage.removeItem("c_user");

        this.router.navigate(["/auth/login"])
      },
      (error: any) => {
        console.log(error)
      }
    );

  }

}

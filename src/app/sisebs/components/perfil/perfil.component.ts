import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.perfil().subscribe(
      (res: any) => {
        console.log(res)
        this.perfil = res;
      },
      (error: any) => {
        console.log(error)

        this.router.navigate(["/auth/login"]);
      }
    )
  }

  logout() {

    let datos = { token: localStorage.getItem("token") }

    this.authService.logout().subscribe(
      (res: any) => {
        console.log(res)

        localStorage.removeItem("token");

        this.router.navigate(["/auth/login"])
      },
      (error: any) => {
        console.log(error)
      }
    );

  }

}

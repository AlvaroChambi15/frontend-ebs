import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),

  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        localStorage.setItem("token", res.access_token)
        this.router.navigate(["sisebs/perfil"])
      },
      (error: any) => {
        console.log(error)
        if (error.status === 401) {
          alert("Credenciales Incorrectas")
        }
      }
    )
  }

}

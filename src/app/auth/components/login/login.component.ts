import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loading: boolean = false;


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
    this.loading = true;

    if (this.loginForm.valid == true) {

      this.authService.login(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res)

          this.loading = false;

          localStorage.setItem("token", res.access_token)
          this.router.navigate(["sisebs/perfil"])
        },
        (error: any) => {
          console.log(error)
          this.loading = false;

          if (error.status === 401) {
            this.loginForm.patchValue({ password: '' });


            this.incorrectCredential();
            // alert("Credenciales Incorrectas")
          }
        }
      )

    } else {
      this.loading = false;
      this.error();
    }

  }



  incorrectCredential() {
    Swal.fire({
      // position: 'top-end',
      icon: 'error',
      title: 'Credenciales Incorrectas!',
      text: 'Verifica tus datos e intentalo de nuevo.',
      showConfirmButton: true,
      // timer: 15000
    })
  }

  error() {
    Swal.fire({
      // position: 'top-end',
      icon: 'warning',
      title: 'Oops...!',
      text: 'Verifica tus datos e intentalo de nuevo.',
      showConfirmButton: true,
      // timer: 15000
    })
  }

}

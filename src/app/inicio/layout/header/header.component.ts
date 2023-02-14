import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _cargarScript: CargarScriptsService,
    public authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    // this._cargarScript.carga(["menu"]);
  }

  scroll(part: string) {
    this.router.navigateByUrl('#' + part);
  }

}

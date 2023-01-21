import { Component, OnInit } from '@angular/core';
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
    public authService: AuthService) {
  }

  ngOnInit(): void {
    // this._cargarScript.carga(["menu"]);
  }

}

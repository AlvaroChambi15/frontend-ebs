import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor(private _cargarScript: CargarScriptsService) {
    // _cargarScript.carga(["menu"]);
  }

  ngOnInit(): void {
    // this._cargarScript.carga(["menu"]);
  }

}

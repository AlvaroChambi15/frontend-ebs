import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})
export class ListaPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pressButton1() {
    alert('SE PRESIONO EL BOTON 1 INFO DE PACIENTE');
  }

  pressButton2() {
    alert('SE PRESIONO EL BOTON 2 SUCCESS DE PACIENTE');
  }

  pressButton3() {
    alert('SE PRESIONO EL BOTON 3 DANGER DE PACIENTE');
  }

}

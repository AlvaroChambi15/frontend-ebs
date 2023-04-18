import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

@Component({
  selector: 'app-sin-acceso',
  templateUrl: './sin-acceso.component.html',
  styleUrls: ['./sin-acceso.component.scss']
})
export class SinAccesoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    defineElement(lottie.loadAnimation);
  }

}

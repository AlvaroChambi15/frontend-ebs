import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { ListaDoctoresComponent } from './components/doctor/lista-doctores/lista-doctores.component';
import { ListaTratamientosComponent } from './components/tratamiento/lista-tratamientos/lista-tratamientos.component';
import { ListaRadiografiasComponent } from './components/radiografia/lista-radiografias/lista-radiografias.component';



@NgModule({
  declarations: [
    ListaDoctoresComponent,
    ListaTratamientosComponent,
    ListaRadiografiasComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }

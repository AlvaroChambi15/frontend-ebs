import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisebsRoutingModule } from './sisebs-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    SisebsRoutingModule
  ]
})
export class SisebsModule { }

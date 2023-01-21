import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisebsRoutingModule } from './sisebs-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListaSolicitudComponent } from './components/citas/lista-solicitud/lista-solicitud.component';
import { ListaCitaComponent } from './components/citas/lista-cita/lista-cita.component';
import { ListaPacienteComponent } from './components/pacientes/lista-paciente/lista-paciente.component';
import { CharginComponent } from './components/layout/chargin/chargin.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    PerfilComponent,
    ListaSolicitudComponent,
    ListaCitaComponent,
    ListaPacienteComponent,
    CharginComponent
  ],
  imports: [
    CommonModule,
    SisebsRoutingModule,
    ProgressSpinnerModule
  ],
  exports: [
    CharginComponent
  ]
})
export class SisebsModule { }

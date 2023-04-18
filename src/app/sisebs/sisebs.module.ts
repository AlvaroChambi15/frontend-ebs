import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisebsRoutingModule } from './sisebs-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListaSolicitudComponent } from './components/citas/lista-solicitud/lista-solicitud.component';
import { ListaCitaComponent } from './components/citas/lista-cita/lista-cita.component';
import { ListaPacienteComponent } from './components/pacientes/lista-paciente/lista-paciente.component';
import { CharginComponent } from './components/layout/chargin/chargin.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ListaTratamientoComponent } from './components/gestion/tratamiento/lista-tratamiento/lista-tratamiento.component';
import { ListaRadiografiasComponent } from './components/gestion/radiografia/lista-radiografias/lista-radiografias.component';

import { RolesItemDirective } from '../directive/roles-item.directive';
import { RoleDirective } from '../directive/role.directive';

// COMPONENTES PRIMENG

/* import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
*/

import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from "@angular/common/http";



import { PrimengModule } from '../primeng/primeng.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json')
}

// 

@NgModule({
  declarations: [
    PerfilComponent,
    ListaSolicitudComponent,
    ListaCitaComponent,
    ListaPacienteComponent,
    CharginComponent,
    ListaTratamientoComponent,
    ListaRadiografiasComponent,
    RolesItemDirective,
    RoleDirective
  ],
  imports: [
    CommonModule,
    SisebsRoutingModule,
    PrimengModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ProgressSpinnerModule,


  ],
  exports: [
    CharginComponent
  ]
})
export class SisebsModule { }

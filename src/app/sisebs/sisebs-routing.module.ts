import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinAccesoComponent } from '../errors/sin-acceso/sin-acceso.component';
import { AuthGuard } from '../guards/auth.guard';
import { RouteRoleGuard } from '../guards/route-role.guard';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { ListaCitaComponent } from './components/citas/lista-cita/lista-cita.component';
import { ListaSolicitudComponent } from './components/citas/lista-solicitud/lista-solicitud.component';
import { ListaDoctoresComponent } from './components/gestion/doctor/lista-doctores/lista-doctores.component';
import { ListaRadiografiasComponent } from './components/gestion/radiografia/lista-radiografias/lista-radiografias.component';
import { ListaTratamientoComponent } from './components/gestion/tratamiento/lista-tratamiento/lista-tratamiento.component';
import { ListaPacienteComponent } from './components/pacientes/lista-paciente/lista-paciente.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: 'perfil', component: PerfilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cita',
        children: [
          { path: '', component: ListaCitaComponent, canActivate: [AuthGuard] },
          { path: 'solicitudes', component: ListaSolicitudComponent, canActivate: [AuthGuard] }
        ]
      },
      {
        path: 'pacientes',
        children: [
          { path: '', component: ListaPacienteComponent, canActivate: [AuthGuard] }
        ]
      },
      /*       {
              path: 'gestion',
              children: [
                { path: 'doctores', component: ListaDoctoresComponent, canActivate: [AuthGuard] },
                { path: 'tratamientos', component: ListaTratamientoComponent, canActivate: [AuthGuard] },
                { path: 'radiografias', component: ListaRadiografiasComponent, canActivate: [AuthGuard] }
              ]
            }, */
      {
        path: 'gestion',
        loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule),
        data: {
          role: ['admin', 'primary']
        },
        canActivate: [AuthGuard, RouteRoleGuard]
      }

    ]
  },
  { path: 'sinAcceso', component: SinAccesoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisebsRoutingModule { }

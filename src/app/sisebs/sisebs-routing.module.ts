import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { ListaCitaComponent } from './components/citas/lista-cita/lista-cita.component';
import { ListaSolicitudComponent } from './components/citas/lista-solicitud/lista-solicitud.component';
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
          { path: 'solicitud', component: ListaSolicitudComponent, canActivate: [AuthGuard] }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisebsRoutingModule { }

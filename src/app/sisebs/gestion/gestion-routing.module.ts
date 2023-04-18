import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ListaDoctoresComponent } from './components/doctor/lista-doctores/lista-doctores.component';
import { ListaRadiografiasComponent } from './components/radiografia/lista-radiografias/lista-radiografias.component';
// import { ListaDoctoresComponent } from '../components/gestion/doctor/lista-doctores/lista-doctores.component';
// import { ListaTratamientoComponent } from '../components/gestion/tratamiento/lista-tratamiento/lista-tratamiento.component';
import { ListaTratamientosComponent } from './components/tratamiento/lista-tratamientos/lista-tratamientos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "doctores",
        component: ListaDoctoresComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "tratamientos",
        component: ListaTratamientosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "radiografias",
        component: ListaRadiografiasComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ListaEgresosComponent } from './components/egresos/lista-egresos/lista-egresos.component';
import { ListaIngresosComponent } from './components/ingresos/lista-ingresos/lista-ingresos.component';
import { ListaProveedoresComponent } from './components/proveedor/lista-proveedores/lista-proveedores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "proveedores",
        component: ListaProveedoresComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "ingresos",
        component: ListaIngresosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "egresos",
        component: ListaEgresosComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

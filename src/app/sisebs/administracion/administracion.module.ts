import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ListaProveedoresComponent } from './components/proveedor/lista-proveedores/lista-proveedores.component';
import { ListaEgresosComponent } from './components/egresos/lista-egresos/lista-egresos.component';
import { ListaIngresosComponent } from './components/ingresos/lista-ingresos/lista-ingresos.component';


@NgModule({
  declarations: [
    ListaProveedoresComponent,
    ListaEgresosComponent,
    ListaIngresosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }

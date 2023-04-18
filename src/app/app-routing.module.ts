import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { Notfound404Component } from './errors/notfound404/notfound404.component';
import { SinAccesoComponent } from './errors/sin-acceso/sin-acceso.component';
import { AuthGuard } from './guards/auth.guard';
import { PersonalComponent } from './inicio/reserva/personal/personal.component';
import { ReservaComponent } from './inicio/reserva/reserva.component';
import { WebComponent } from './inicio/web/web.component';

const routes: Routes = [

  {
    path: '',
    component: WebComponent
  },
  {
    path: 'reserva-cita',
    component: ReservaComponent,
    children: [
      { path: 'personal', component: PersonalComponent }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'sisebs',
    loadChildren: () => import('./sisebs/sisebs.module').then(m => m.SisebsModule),
    canActivate: [AuthGuard]
  },
  { path: 'noexiste', component: Notfound404Component },
  // { path: 'sinAcceso', component: SinAccesoComponent },
  { path: '**', redirectTo: 'noexiste' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
}

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: false })],
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

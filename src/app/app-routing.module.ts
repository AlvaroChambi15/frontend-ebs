import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { Notfound404Component } from './errors/notfound404/notfound404.component';
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '', component: DesignComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'sisebs',
    loadChildren: () => import('./sisebs/sisebs.module').then(m => m.SisebsModule),
    canActivate: [AuthGuard]
  },
  { path: 'noexiste', component: Notfound404Component },
  { path: '**', redirectTo: 'noexiste' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

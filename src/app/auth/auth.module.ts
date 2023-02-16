import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CharginLoginComponent } from './components/chargin-login/chargin-login.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    LoginComponent,
    CharginLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    ProgressSpinnerModule
  ]
})
export class AuthModule { }

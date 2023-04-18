import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { CoreModule } from './core/core.module';
import { DesignComponent } from './design/design.component';

/* ------------------- COMPONENTES ------------------- */

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppLayoutModule } from './layout/app.layout.module';
import { Notfound404Component } from './errors/notfound404/notfound404.component';
import { WebComponent } from './inicio/web/web.component';
import { ReservaComponent } from './inicio/reserva/reserva.component';
import { HeaderComponent } from './inicio/layout/header/header.component';
import { FooterComponent } from './inicio/layout/footer/footer.component';
import { PersonalComponent } from './inicio/reserva/personal/personal.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SisebsModule } from './sisebs/sisebs.module';
import { SidebarModule } from 'primeng/sidebar';
import { SinAccesoComponent } from './errors/sin-acceso/sin-acceso.component';
import { RolesItemDirective } from './directive/roles-item.directive';
import { RoleDirective } from './directive/role.directive';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    Notfound404Component,
    WebComponent,
    ReservaComponent,
    HeaderComponent,
    FooterComponent,
    PersonalComponent,
    SinAccesoComponent,
    // RoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AppLayoutModule,
    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    InputMaskModule,
    KeyFilterModule,
    DividerModule,
    FormsModule,
    TooltipModule,
    DialogModule,
    SisebsModule,
    SidebarModule,
    TranslateModule.forRoot()
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [
    // RolesItemDirective
    TranslateModule
  ]
})
export class AppModule { }

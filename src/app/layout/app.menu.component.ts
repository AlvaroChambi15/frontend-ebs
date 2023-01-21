import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'DASHBOARD',
                items: [
                    { label: 'Inicio', icon: 'pi pi-th-large', routerLink: ['/sisebs'] }
                ]
            },
            {
                label: 'OPERACIÓN',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Citas',
                        icon: 'pi pi-calendar',
                        items: [
                            {
                                label: 'Solicitudes',
                                icon: 'pi pi-inbox',
                                routerLink: ['/sisebs/cita/solicitud']
                            },
                            {
                                label: 'Gestión Citas',
                                icon: 'pi pi-server',
                                routerLink: ['/sisebs/cita']
                            }
                        ]
                    },
                    {
                        label: 'Pacientes',
                        icon: 'pi pi-users',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Planes Clínicos',
                        icon: 'pi pi-book',
                        routerLink: ['/pages/timeline']
                    }
                ]
            },
            {
                label: 'ADMINISTRACIÓN',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Gestión',
                        icon: 'pi pi-sliders-h',
                        items: [
                            {
                                label: 'Doctores',
                                icon: 'pi pi-briefcase',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Tratamientos',
                                icon: 'pi pi-list',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Radiografias',
                                icon: 'pi pi-images',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Mi Consultorio',
                        icon: 'pi pi-home',
                        items: [
                            {
                                label: 'Proveedores',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Egresos',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Ingresos',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'General',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    }
                ]
            }
        ];
    }
}

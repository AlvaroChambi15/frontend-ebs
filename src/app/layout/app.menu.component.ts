import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { decrypt } from '../util/util-encrypt';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.chargeMenu();
    }

    chargeMenu() {

        let user = JSON.parse(atob(decrypt(localStorage.getItem("c_user")!)!));
        let permisoUser = user.role;

        switch (permisoUser) {
            case 'admin':
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
                                        routerLink: ['/sisebs/cita/solicitudes']
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
                                routerLink: ['/sisebs/pacientes']
                            },
                            {
                                label: 'Planes Clínicos',
                                icon: 'pi pi-book',
                                routerLink: ['/sisebs/planesClinicos']
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
                                        routerLink: ['/sisebs/gestion/doctores']
                                    },
                                    {
                                        label: 'Tratamientos',
                                        icon: 'pi pi-list',
                                        routerLink: ['/sisebs/gestion/tratamientos']
                                    },
                                    {
                                        label: 'Radiografias',
                                        icon: 'pi pi-images',
                                        routerLink: ['/sisebs/gestion/radiografias']
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
                                        routerLink: ['/sisebs/admin/proveedores']
                                    },
                                    {
                                        label: 'Egresos',
                                        icon: 'pi pi-fw pi-times-circle',
                                        routerLink: ['/sisebs/admin/egresos']
                                    },
                                    {
                                        label: 'Ingresos',
                                        icon: 'pi pi-fw pi-lock',
                                        routerLink: ['/sisebs/admin/ingresos']
                                    },
                                    {
                                        label: 'General',
                                        icon: 'pi pi-fw pi-lock',
                                        routerLink: ['/sisebs/admin/general']
                                    }
                                ]
                            }
                        ]
                    }
                ];
                break;
            case 'primary':
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
                                        routerLink: ['/sisebs/cita/solicitudes']
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
                                routerLink: ['/sisebs/pacientes']
                            },
                            {
                                label: 'Planes Clínicos',
                                icon: 'pi pi-book',
                                routerLink: ['/sisebs/planesClinicos']
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
                                        routerLink: ['/sisebs/gestion/doctores']
                                    },
                                    {
                                        label: 'Tratamientos',
                                        icon: 'pi pi-list',
                                        routerLink: ['/sisebs/gestion/tratamientos']
                                    },
                                    {
                                        label: 'Radiografias',
                                        icon: 'pi pi-images',
                                        routerLink: ['/sisebs/gestion/radiografias']
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
                                        routerLink: ['/sisebs/admin/proveedores']
                                    },
                                    {
                                        label: 'Egresos',
                                        icon: 'pi pi-fw pi-times-circle',
                                        routerLink: ['/sisebs/admin/egresos']
                                    },
                                    {
                                        label: 'Ingresos',
                                        icon: 'pi pi-fw pi-lock',
                                        routerLink: ['/sisebs/admin/ingresos']
                                    },
                                    {
                                        label: 'General',
                                        icon: 'pi pi-fw pi-lock',
                                        routerLink: ['/sisebs/admin/general']
                                    }
                                ]
                            }
                        ]
                    }
                ];
                break;
            case 'secondary':
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
                                        routerLink: ['/sisebs/cita/solicitudes']
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
                                routerLink: ['/sisebs/pacientes']
                            },
                            {
                                label: 'Planes Clínicos',
                                icon: 'pi pi-book',
                                routerLink: ['/sisebs/planesClinicos']
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
                                        label: 'Tratamientos',
                                        icon: 'pi pi-list',
                                        routerLink: ['/sisebs/gestion/tratamientos']
                                    },
                                    {
                                        label: 'Radiografias',
                                        icon: 'pi pi-images',
                                        routerLink: ['/sisebs/gestion/radiografias']
                                    }
                                ]
                            }
                        ]
                    }
                ];
                break;
            case 'guest':
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
                                label: 'Pacientes',
                                icon: 'pi pi-users',
                                routerLink: ['/sisebs/pacientes']
                            },
                            {
                                label: 'Planes Clínicos',
                                icon: 'pi pi-book',
                                routerLink: ['/sisebs/planesClinicos']
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
                                        label: 'Tratamientos',
                                        icon: 'pi pi-list',
                                        routerLink: ['/sisebs/gestion/tratamientos']
                                    }
                                ]
                            }
                        ]
                    }
                ];
                break;
            default:
                // 
                break;
        }

        /* this.model = [
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
                                routerLink: ['/sisebs/cita/solicitudes']
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
                        routerLink: ['/sisebs/pacientes']
                    },
                    {
                        label: 'Planes Clínicos',
                        icon: 'pi pi-book',
                        routerLink: ['/sisebs/planesClinicos']
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
                                routerLink: ['/sisebs/gestion/doctores']
                            },
                            {
                                label: 'Tratamientos',
                                icon: 'pi pi-list',
                                routerLink: ['/sisebs/gestion/tratamientos']
                            },
                            {
                                label: 'Radiografias',
                                icon: 'pi pi-images',
                                routerLink: ['/sisebs/gestion/radiografias']
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
                                routerLink: ['/sisebs/admin/proveedores']
                            },
                            {
                                label: 'Egresos',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/sisebs/admin/egresos']
                            },
                            {
                                label: 'Ingresos',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/sisebs/admin/ingresos']
                            },
                            {
                                label: 'General',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/sisebs/admin/general']
                            }
                        ]
                    }
                ]
            }
        ]; */
    }
}

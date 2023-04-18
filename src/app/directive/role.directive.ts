import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { decrypt } from '../util/util-encrypt';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  userRole: any;
  private permissions: string[] = [];


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
    private router: Router
  ) {
    this.obtenerUserRoleActual();
  }

  ngOnInit(): void {

    this.updateView();
  }

  @Input()
  set appRole(val: Array<string>) {
    console.log(val);

    this.viewContainer.createEmbeddedView(this.templateRef);
    this.permissions = val;
    this.updateView();
  }

  obtenerUserRoleActual() {
    let user = JSON.parse(atob(decrypt(localStorage.getItem("c_user")!)!));
    this.userRole = user.role;
    console.log(this.userRole);
  }

  private updateView(): void {
    this.viewContainer.clear();
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPermission(): boolean {
    // alert(this.userRole);
    if (this.userRole) {

      console.log('EL PERMISO QUE SE REQUIERE ES: ' + this.permissions);
      console.log('EL PERMISO QUE TIENE EL USUARIO ES: ' + this.userRole);

      if (this.permissions.includes(this.userRole)) {
        console.log('El usuario SI tiene permiso');
        return true;
      } else {
        console.log('El usuario NO tiene permiso');
        return false;
      }
    } else {
      // Sí el usuario no tiene roles se lo desloguea
      this.authService.logout().subscribe((res: any) => { console.log(res) }, (error: any) => { console.log(error); this.router.navigate(['/login']); });
    }
    return false;
  }

}

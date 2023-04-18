import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { decrypt } from '../util/util-encrypt';

@Directive({
  selector: '[appRolesItem]'
})
export class RolesItemDirective implements OnInit {
  // @Input('appRolesItem') allowedRoles?: any;

  userRole: any;
  private permissions: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  ngOnInit(): void {

    this.obtenerUserRoleActual();

    this.updateView();
  }

  @Input()
  set appRole(val: Array<string>) {
    console.log('****', val);
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.permissions = val;

  }

  obtenerUserRoleActual() {
    let user = JSON.parse(atob(decrypt(localStorage.getItem("c_user")!)!));
    this.userRole = user.role;
    console.log(this.userRole);
  }

  updateView() {

  }

}

import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
  standalone: true,
})
export class PermissionDirective implements OnInit {
  @Input()
  appPermission: string[] = [];

  private currentRole: string = 'agent';

  constructor(
    private tmplRef: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}


  ngOnInit(): void {
    console.log(this.appPermission)
    console.log(this.currentRole)
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }
}

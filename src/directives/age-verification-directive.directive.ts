import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appTestAgeVerification]',
})
export class AgeVerificationDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input('appTestAgeVerification')
  set hasLegalAge(isLegal: boolean) {
    this.viewContainer.clear();
    if (!isLegal) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

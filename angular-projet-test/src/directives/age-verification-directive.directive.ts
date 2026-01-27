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
  set hasLegalAge(isMajor: boolean) {
    this.viewContainer.clear();
    if (!isMajor) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

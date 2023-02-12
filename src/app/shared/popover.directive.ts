import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[popover]',
})
export class PopoverDirective {
  @Input() popoverContext: any;

  constructor(private viewContainer: ViewContainerRef) {}

  @Input() set popover(templateRef: TemplateRef<any>) {
    this.viewContainer.createEmbeddedView(templateRef, {
      context: this.popoverContext,
    });
  }
}

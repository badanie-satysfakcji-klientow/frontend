import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>
  ) {
  }

  @Input('appTimes') set render(times:number){
    this.container.clear();
    for (let i = 0; i < times; i++) {
      this.container.createEmbeddedView(this.template, {index: i});
    }
  }

}

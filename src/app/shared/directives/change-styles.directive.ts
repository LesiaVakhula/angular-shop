import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyles]'
})
export class ChangeStylesDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appChangeStyles') data: string;

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.ChangeStyle(this.data);
  }

  ChangeStyle(style) {
    this.render.setStyle(this.element.nativeElement, 'border', style);
  }
}


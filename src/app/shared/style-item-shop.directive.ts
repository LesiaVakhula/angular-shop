import { Directive, HostBinding, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleItemShop]'
})
export class StyleItemShopDirective {

  @HostBinding ('class')
    attrClass = 'product-shop-item';

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeBacground('#98eaec');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeBacground(null);
  }
  private changeBacground(backgroundColor: string) {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', backgroundColor);
  }
}

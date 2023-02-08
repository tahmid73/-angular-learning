import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @Input() color:string='red';

  constructor(private element:ElementRef,private renderer:Renderer2) {
    this.element.nativeElement.style.backgroundColor=this.color
    console.log(this.element)
   }
  ngOnInit (): void {
    // this.element.nativeElement.style.backgroundColor=this.color
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white',
    )
  }
}

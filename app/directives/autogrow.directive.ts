import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer) { }

  onFocus() {
    this._renderer.setElementStyle(this._el.nativeElement, 'width', '537');
  }

  onBlur() {
    this._renderer.setElementStyle(this._el.nativeElement, 'width', '180');
  }
}

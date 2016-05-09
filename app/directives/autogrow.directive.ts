import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {
  constructor(private _el: ElementRef) { }

  onFocus() {
    this._el.nativeElement.style.width = "537px";
  }

  onBlur() {
    this._el.nativeElement.style.width = "180px";
  }
}

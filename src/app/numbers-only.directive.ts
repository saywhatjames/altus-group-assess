import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'input[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor() {
  }


  @HostListener('keydown', ['$event']) onKeyDown = (e: KeyboardEvent) => {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter, Home, End , Left, right
      ['Enter', 'Tab', 'Escape', 'Delete', 'Backspace', 'Home', 'End', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) !== -1 ||
      (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
      (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
      (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
      (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)

    ) {
      return;  // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (
      (!(/[0-9]/.test(e.key)))
    ) {
      e.preventDefault();
    }
  }

}

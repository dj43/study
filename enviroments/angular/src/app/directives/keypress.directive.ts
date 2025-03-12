import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeypress]',
  standalone: true,
})
export class KeypressDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log((event.target as HTMLInputElement).value);
  }
}

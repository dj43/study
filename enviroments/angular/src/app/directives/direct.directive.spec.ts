import { ElementRef, Renderer2 } from '@angular/core';
import { DirectDirective } from './direct.directive';

describe('DirectDirective', () => {
  let rendererMock: Renderer2;
  let elementMock: ElementRef;
  let directive: DirectDirective;
  beforeEach(() => {
    rendererMock = jasmine.createSpyObj('Renderer2', [
      'setStyle',
      'removeStyle',
    ]);
    elementMock = new ElementRef(document.createElement('div'));
    directive = new DirectDirective(elementMock, rendererMock);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply background color on mouse enter', () => {
    directive.onMouseHover(); // Simulate mouse enter
    expect(rendererMock.setStyle).toHaveBeenCalledWith(
      elementMock.nativeElement,
      'background-color',
      'blue'
    );
  });
});

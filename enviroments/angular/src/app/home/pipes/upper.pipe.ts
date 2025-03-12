import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
  standalone: true,
})
export class UpperPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}

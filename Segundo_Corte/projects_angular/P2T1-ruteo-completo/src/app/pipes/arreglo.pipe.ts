import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arreglo'
})
export class ArregloPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanString'
})
export class BooleanStringPipe implements PipeTransform {

  transform(value: boolean, onTrue: string, onFalse: string): string {
    return value ? onTrue : onFalse;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mpsToKmph'
})
export class MpsToKmphPipe implements PipeTransform {
  transform(value: number): number {
    return value * 3.6; // Umrechnungsfaktor von m/s zu km/h
  }
}
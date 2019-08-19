import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHours implements PipeTransform {

  transform(value: number, type: string): string {
    if (type === 'digitalClock') {
      if (value === 0) {
        return '-';
      }
      const hours = Math.floor(value / 60);
      let minutes: string = (value % 60).toString();
      if (minutes === '0') {
        minutes = '00';
      }
      return `${hours}:${minutes}`;
    }
    if (type === 'fraction') {
      const valueWithFraction = (value / 60).toFixed(2);
      return valueWithFraction;
    }

  }

}

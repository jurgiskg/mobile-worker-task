import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursWorked'
})
export class HoursWorkedPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value === 0) {
      return '-';
    }
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}:${minutes}`;
  }

}

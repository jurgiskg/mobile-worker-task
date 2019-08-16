import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthYear'
})
export class MonthYearPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    const monthName = value.toLocaleString('default', { month: 'short' });
    const fullYear = value.getFullYear();
    return `${monthName} ${fullYear}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDuration'
})
export class TimeDurationPipe implements PipeTransform {

  transform(date1: Date, date2: Date): any {
    const hours1 = this.getHours(date1);
    const hours2 = this.getHours(date2);
    const minutes1 = this.getMinutes(date1);
    const minutes2 = this.getMinutes(date2);

    return `(${hours1}:${minutes1} - ${hours2}:${minutes2})`;
  }

  private getHours = (date: Date): string => {
    const hours = date.getHours().toString();
    return this.addZeroIfNeeded(hours);
  }

  private getMinutes = (date: Date): string => {
    const minutes = date.getMinutes().toString();
    return this.addZeroIfNeeded(minutes);
  }

  private addZeroIfNeeded = (dateString: string): string => {
    if (dateString.length === 1) {
      dateString = `0${dateString}`;
    }
    return dateString;
  }

}

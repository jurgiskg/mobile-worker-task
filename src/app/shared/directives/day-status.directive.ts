import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { DayStatus } from 'src/app/models/day-status';

@Directive({
  selector: '[appDayStatus]'
})
export class DayStatusDirective implements OnInit {

  @Input('appDayStatus') dayStatus: DayStatus;
  hostElement: ElementRef;

  constructor(el: ElementRef) {
    this.hostElement = el;
  }

  ngOnInit() {
    if (this.dayStatus === DayStatus.Unknown) {
      this.hostElement.nativeElement.style.display = 'hidden';
    } else {
      const color = this.getStatusColor(this.dayStatus);
      this.hostElement.nativeElement.style.backgroundColor = color;
    }
  }

  private getStatusColor = (dayStatus: DayStatus): string => {
    switch (dayStatus) {
      case DayStatus.Approved:
        return 'green';
      case DayStatus.Rejected:
        return 'red';
      case DayStatus.Pending:
        return 'gray';
    }
  }

}

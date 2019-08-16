import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayStatusDirective } from './directives/day-status.directive';
import { HoursWorkedPipe } from './pipes/hours-worked.pipe';

@NgModule({
  declarations: [
    DayStatusDirective,
    HoursWorkedPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayStatusDirective,
    HoursWorkedPipe
  ]
})
export class SharedModule { }

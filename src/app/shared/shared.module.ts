import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayStatusDirective } from './directives/day-status.directive';

@NgModule({
  declarations: [
    DayStatusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayStatusDirective
  ]
})
export class SharedModule { }

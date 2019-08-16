import { WorkEvent } from './work-event';
import { DayStatus } from '../business-logic/day-status';

export interface DayReport {
  date: Date;
  minutesWorked: number;
  events: Array<WorkEvent>;
  status: DayStatus;
}

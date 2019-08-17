import { WorkEvent } from './work-event';
import { DayStatus } from './day-status';

export interface DayReport {
  date: Date;
  minutesWorked: number;
  events: Array<WorkEvent>;
  status: DayStatus;
}

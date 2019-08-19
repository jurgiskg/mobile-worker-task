import { DayStatus } from './day-status';
import { WorkTask } from './work-task';

export interface DayReport {
  date: Date;
  tasks: Array<WorkTask>;
  firstTaskStart: Date;
  lastTaskEnd: Date;
  tasksCount: number;

  minutesWorked: number;
  status: DayStatus;
}

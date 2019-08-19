import { WorkEvent } from './work-event';

export interface WorkTask {
  events: Array<WorkEvent>;
  start: Date;
  end: Date;
  isWorkHour: boolean;
  isApproved: boolean;
  isRejected: boolean;
}

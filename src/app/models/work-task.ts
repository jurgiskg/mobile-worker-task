import { WorkEvent } from './work-event';

export interface WorkTask {
  events: Array<WorkEvent>;
  start: Date;
  end: Date;
  isApproved: boolean;
  isRejected: boolean;
}

export interface WorkEvent {
  quantity: number;
  price: number;
  eventType: string;
  isExpenseType: boolean;
  isHoursEventType: boolean;
  isAdditionalHoursEventType: boolean;
  start: Date;
  end: Date;
}

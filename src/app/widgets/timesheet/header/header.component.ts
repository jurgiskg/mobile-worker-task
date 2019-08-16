import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() selectedDay: Date;

  @Output() calendarIconSelected = new EventEmitter<Date>();
  today: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  selectToday = () => {
    this.calendarIconSelected.emit(this.today);
  }

}

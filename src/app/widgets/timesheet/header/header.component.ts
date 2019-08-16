import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() todaySelected = new EventEmitter<Date>();
  today: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  selectToday = () => {
    this.todaySelected.emit(this.today);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.less']
})
export class DayComponent implements OnInit {

  @Input() day: Date;
  @Input() hours: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.sass']
})
export class Task03Component {
  logs: number[] = [];
  isShowed:boolean = false;

  toggleDisplay() {
    this.isShowed = !this.isShowed;
  }

  addLog() {
    this.logs.push(Date.now());
  }

}

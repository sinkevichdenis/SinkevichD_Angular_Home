import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.sass']
})
export class TimerControlComponent {
  resultTimer: ResultTimer = null;
  private idTimer: number;
  @Output() resultChanged = new EventEmitter();
  @Output() timerStopped = new EventEmitter();

  startTimer(){
    this.resultTimer = 0;
    this.resultChanged.emit(this.resultTimer);

    this.idTimer = window.setInterval(() => {
      this.resultTimer++;
      this.resultChanged.emit(this.resultTimer);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.idTimer);
    this.resultTimer = null;
    this.timerStopped.emit();
  }
}

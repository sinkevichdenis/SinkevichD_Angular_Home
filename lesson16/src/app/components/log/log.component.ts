import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from '../../models/log.interface';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  @Input() log: Log;
  @Output() logHasDeleted = new EventEmitter<any>();

  constructor(public stateService: StateService) {}
  
  delete(id: string) {
    if (confirm('Are you sure')) {
      this.logHasDeleted.emit(id);
    }
  }

  edit(log: Log) {
    this.stateService.logEdit.next(log);
  }
}

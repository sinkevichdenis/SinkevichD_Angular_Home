import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

import { Log } from '../models/log.interface';
import { FbService } from "./fb.service";
import {map} from "rxjs/internal/operators";

@Injectable()
export class LogService {
  logs: Log[];

  // не понимаю смысла этих потоков в контексте работы с базой firebase
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor(private fb: FbService) {
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return this.fb.getLogs().pipe(
      map(logs => {
        return this.logs = [...logs]
      })
    )
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);

    // Add to firebase storage
    this.fb.newLog(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);

    // Update firebase storage
      this.fb.updateLog(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });

    // Delete from firebase storage
      this.fb.deleteLog(log);
  }

  clearState() {
    this.stateSource.next(true);
  }
}

import { Injectable } from '@angular/core';
import { Log } from './models/log.interface';
import { BehaviorSubject, Observable  } from 'rxjs';

@Injectable()
export class StoreService {
  private logsStore$: BehaviorSubject<Log[]> = new BehaviorSubject <Log[]>([]);

  addLog( log: Log ): void {
    let prev = this.logsStore$.getValue();
    prev.push(log);
    this.logsStore$.next(prev);
  }

  deleteLog(id: string) {
    let prev = this.logsStore$.getValue();
    let index = prev.findIndex((item) => item.id === id);
    prev.splice(index, 1);
    this.logsStore$.next(prev);
  } 

  getLogs(): Observable<Log[]> {
    return this.logsStore$
  }

} 
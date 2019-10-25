import { Injectable } from '@angular/core';
import { Log } from './models/log.interface';
import { Subject } from 'rxjs';

@Injectable()
export class StateService {
  public logEdit: Subject<Log | null> = new Subject<Log | null>(); 
}

import { Component, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StoreService } from '../../store.service';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {
  @Output() logHasAdded = new EventEmitter<any>();

  public input: HTMLInputElement;
  public addBtn: HTMLInputElement;
  public clearBtn: HTMLInputElement;
  private text: string;

  constructor(
    public storeService: StoreService, 
    public stateService: StateService
  ) {}

  ngAfterViewInit() {
    this.input = <HTMLInputElement>document.getElementById('input');
    this.addBtn = <HTMLInputElement>document.getElementById('addBtn');
    this.clearBtn = <HTMLInputElement>document.getElementById('clearBtn');

    let log$ = this.stateService.logEdit;
    let editLog: any;

    log$.subscribe((log) => {
      if (log) {
        editLog = log;
        this.input.value = log.text;
        this.input.dispatchEvent(new Event('input'));
      } else {
        editLog = null;
      }
    });
        
    fromEvent(this.addBtn, 'click').subscribe(() => {
      editLog && this.storeService.deleteLog(editLog.id);
      log$.next(null);
      this.addLog();
    });

    fromEvent(this.input, 'input').subscribe(() => this.writeLogName());
  }

  generateId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = (c == 'x') ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addLog(): void  {
    let currentLog = {
      id: this.generateId(),
      text: this.input.value.trim(),
      date: new Date()
    };
    this.logHasAdded.emit(currentLog);
    this.clearLog();
  }

  clearLog(): void  {
    this.input.value = '';
    this.input.dispatchEvent(new Event('input'));
  }

  writeLogName(): void {
    this.addBtn.disabled = this.input.value.trim() ? false: true;
  }

}
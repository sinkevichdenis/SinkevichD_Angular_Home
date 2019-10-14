import { Component, OnInit } from '@angular/core';
import { Log } from './models/log.interface';
import { StoreService } from './store.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  private logs: Log[];
  
  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getLogs().subscribe((item) => {
      this.logs = [...item].reverse();
      localStorage.setItem('logs', JSON.stringify(this.logs));
      });
  }

  addLog(log: Log) {
    this.storeService.addLog(log);
  }

  deleteLog (id: string) {
    this.storeService.deleteLog(id);
  }

  editLog(id: string) {
    
  }
 
}

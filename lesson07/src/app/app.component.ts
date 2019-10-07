import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  dataArr: ResultTimer[];

  ngOnInit() {
    this.dataArr = [];
  }

  resultHasChanged(result: ResultTimer) {
    this.dataArr.push(result);
  }

  timerHasStopped() {
    this.dataArr = [];
  }

}

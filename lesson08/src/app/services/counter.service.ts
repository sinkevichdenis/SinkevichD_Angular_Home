import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number;

  constructor () {
    this.counter = 0;
  }

  count(msg?: string) {
      this.counter++;
      console.log(`${this.counter} ${msg}`)
  }
}

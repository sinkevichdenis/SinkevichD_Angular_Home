import { Component } from '@angular/core';
import { UsersService } from "./services/users.service";
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  activeUsersList: User[];
  disactiveUsersList: User[];
  private activeCounter: CounterService;
  private disactiveCounter: CounterService;

  constructor(private usersService: UsersService) {
    this.activeCounter = new CounterService;
    this.disactiveCounter = new CounterService;
    this.getServiceData();
  }

  getServiceData(): void {
    this.activeUsersList = this.usersService.getActiveList();
    this.disactiveUsersList = this.usersService.getDisactiveList();
  }

  changeStatus(arg: ActivationEvent): void {
    this.usersService.changeStatus(arg[0]);
    this.getServiceData();
    this.countUsers(arg[1]);
  }

  countUsers(flag: string) {
    if (flag === 'add'){
      this.activeCounter.count('Disactive --> Active');
    } else {
      this.disactiveCounter.count('Active --> Disactive');
    }
  }

}

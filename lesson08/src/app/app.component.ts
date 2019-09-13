import { Component } from '@angular/core';
import { UsersService } from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  activeUsersList: User[];
  disactiveUsersList: User[];

  constructor(private usersService: UsersService) {
    this.getServiceData();
  }

  getServiceData(): void {
    this.activeUsersList = this.usersService.getActiveList();
    this.disactiveUsersList = this.usersService.getDisactiveList();
  }

  changeStatus(arg: ActivationEvent): void {
    this.usersService.changeStatus(arg[0]);
    this.getServiceData();
  }

}

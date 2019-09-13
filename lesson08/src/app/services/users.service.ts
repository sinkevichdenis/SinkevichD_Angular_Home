import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersList: User[] = [
    {
      id: 1,
      name: 'Anna',
      age: 23,
      status: true
    }, {
      id: 2,
      name: 'Alisa',
      age: 22,
      status: false
    }, {
      id: 3,
      name: 'Nick',
      age: 35,
      status: true
    }, {
      id: 4,
      name: 'Semen',
      age: 18,
      status: true
    }, {
      id: 5,
      name: 'Nickodim',
      age: 25,
      status: false
    }, {
      id: 6,
      name: 'Sergey',
      age: 28,
      status: false
    }
  ];

  getActiveList(): User[] {
    return this.usersList.filter(item => item.status);
  }

  getDisactiveList(): User[] {
    return this.usersList.filter(item => !item.status);
  }

  getUsersList(): User[] {
    return this.usersList;
  }

  changeStatus (id: number): void {
    this.usersList.forEach(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
    })
  }
}

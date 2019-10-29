/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";
import {By} from "@angular/platform-browser";

class MockService {
  user = {
    name: 'Name'
  };

  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('fake data');
      }, 1500);
    });
    return resultPromise;
  }
}

describe('Component: User', () => {
  let fixture;
  let app;
  let userService;
  let dataService;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        {provide: DataService, useValue: MockService},
        {provide: UserService, useValue: MockService}
      ]
    });

// я не понимаю, почему не переключается на MockService при прохождении тестов

    fixture = TestBed.createComponent(UserComponent);
    app = fixture.debugElement.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    dataService = fixture.debugElement.injector.get(DataService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    fixture.detectChanges();
    expect(userService.user).toEqual(app.user);
  });

  it('should display the user name if user is logged in', () => {
    const el = fixture.debugElement.nativeElement;
    app.isLoggedIn = true;
    fixture.detectChanges();
    expect(el.querySelector('p').textContent).toContain('User');
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    const el = fixture.debugElement.nativeElement;
    app.isLoggedIn = false;
    fixture.detectChanges();
    expect(el.querySelector('p').textContent).toBe('Please log in first');
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let spy = spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve('fake data')
    );
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(app.data).toBeUndefined();
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    // by using whenStable()
    spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve('fake data')
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toEqual('fake data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    // by using tick()
    spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve('fake data')
    );
    fixture.detectChanges();
    tick(500);
    expect(app.data).toEqual('fake data');
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";
import {By} from "@angular/platform-browser";

const mockUser = {name: 'Name'};

class MockService {
  getUser() {
    return mockUser.name;
  }
}

describe('Component: User', () => {
  let fixture;
  let app;
  let userService;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: UserService, useClass: MockService }
      ]
    });

    fixture = TestBed.createComponent(UserComponent);
    app = fixture.debugElement.componentInstance;
    userService = bed.get(UserService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {

  });

  it('should display the user name if user is logged in', () => {
    const el = fixture.debugElement;
    app.isLoggedIn = true;
    fixture.detectChanges();
    expect(el.query(By.css('p')).nativeElement.textContent).toContain('User');
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    const el = fixture.debugElement;
    app.isLoggedIn = false;
    fixture.detectChanges();
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('Please log in first');
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {});

  it('should fetch data successfully if called asynchronously', async(() => {
    // by using whenStable()
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    // by using tick()
  }));
});

import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean;
  loggedUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => {
        this.isLoggedIn = !!auth;
      });
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessages.show('You are now logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
  }
}
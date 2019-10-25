import { Component } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.authService.getAuth()
      .subscribe(auth => {
        if (auth) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then((res) => {
        console.log('res', res);
        this.flashMessages.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('err', err);
        this.flashMessages.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      }
    );
  }
}

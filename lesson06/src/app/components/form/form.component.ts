import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  userName: string = '';

  clearInput() {
    this.userName = '';
  }
}

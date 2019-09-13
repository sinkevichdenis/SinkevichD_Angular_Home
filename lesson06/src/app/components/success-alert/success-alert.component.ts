import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template:`
    <div class="alert success">
      <p>The second message was loaded!</p>
    </div>`,
  styles: [
      'div {margin-bottom: 1rem;}',
      'p {margin: 0; text-align: center}',
      '.success {width: 20rem; height: 2rem; line-height: 2rem; background-color: rgba(0,255,0,.3); ' +
      'border: 2px green solid; border-radius: .5rem}'
  ]
})
export class SuccessAlertComponent{
}

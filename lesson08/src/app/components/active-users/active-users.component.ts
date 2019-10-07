import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent {
  @Input() user: User;
  @Output() changedStatusByElem: EventEmitter<ActivationEvent> = new EventEmitter();

  onClick(): void {
    this.changedStatusByElem.emit([this.user.id, 'delete']);
  }
}

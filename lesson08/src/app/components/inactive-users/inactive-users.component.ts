import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent{
  @Input() user: User;
  @Output() changedStatusByElem: EventEmitter<ActivationEvent> = new EventEmitter();

  onClick(): void {
    this.changedStatusByElem.emit([this.user.id, 'add']);
  }
}

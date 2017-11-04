import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent {
  @Output() usernameSubmitted: EventEmitter<string> = new EventEmitter();

  public username: string;

  submitted(username: string): void {
    this.usernameSubmitted.emit(username);
  }

}

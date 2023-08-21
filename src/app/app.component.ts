import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task4Angular';
  selectedUser: string | undefined;

  onUserSelected(user: string): void {
    this.selectedUser = user;
  }
}

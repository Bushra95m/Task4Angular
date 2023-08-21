import { Component, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';


 

@Component({
  selector: 'app-user-droplist',
  templateUrl: './user-droplist.component.html',
  styleUrls: ['./user-droplist.component.css']
})
export class UserDroplistComponent {
  selectedUser: string | undefined;
  users: string[] = ['User 1', 'User 2', 'User 3']; // Replace with your user data

  constructor() { }

  ngOnInit(): void {
  }

  onUserSelect(event: any) {
    this.selectedUser = event.value;
  }

  isNextButtonEnabled(): boolean {
    return !!this.selectedUser;
  }
}


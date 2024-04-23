import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstName!: string;
  middleName!: string;
  lastName!: string;
  // Add the remaining properties here

  onFileSelected(event: any) {
    // Handle file upload logic here
  }
}
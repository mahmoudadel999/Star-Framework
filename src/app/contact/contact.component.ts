import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // Define properties to bind with form fields
  userName: string = '';
  userAge: string = '';
  userPassord: string = '';
  userEmail: string = '';

  isFormValid(): boolean {
    if (this.userName && this.userAge && this.userPassord && this.userEmail) {
      return true;
    } else {
      return false;
    }
  }
}

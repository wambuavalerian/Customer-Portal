// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-new-claim',
//   templateUrl: './new-claim.component.html',
//   styleUrl: './new-claim.component.css'
// })
// export class NewClaimComponent {

// }



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-claim',
  templateUrl: './new-claim.component.html',
  styleUrl: './new-claim.component.css'
})
export class NewClaimComponent implements OnInit {
  registrationForm : FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      id: new FormControl('0'),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      kraPin: new FormControl(''),
      idNumber: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }
  ngOnInit() {
    // Initialize any properties or values if needed
  }

  onSaveUser() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log(formData); // You can replace this with your desired logic to handle form submission
    } else {
      // Form is invalid, handle validation errors or show appropriate messages
      console.log('Form is invalid');
    }
  }
}



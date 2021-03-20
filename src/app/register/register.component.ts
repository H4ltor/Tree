import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  /*registerUserData = {
    password: String,
    email: String,
  }*/
  registerForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}

  /*registerUser() {
    console.log(this.email, this.password);
  }*/

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}

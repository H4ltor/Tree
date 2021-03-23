import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  
  registerForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl(),
  });

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  registerUser() {
    console.log(this.registerForm)
    this.authService.registerUser(this.registerForm.value)
    .subscribe(
      (      res: any) => console.log(res),
      (      err: any) => console.log(err)
      )
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}

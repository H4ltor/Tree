import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService,
    private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this.authService.registerUser(this.registerForm.value)
    .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}

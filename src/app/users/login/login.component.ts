import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl(),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginForm.value)
    this.authService.loginUser(this.loginForm.value)
    .subscribe(
      (      res: any) => console.log(res),
      (      err: any) => console.log(err)
      )
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
}

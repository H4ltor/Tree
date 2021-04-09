import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  
  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'New',
      icon: 'add'
    },
    {
      label: 'Contact',
      icon: 'talk'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

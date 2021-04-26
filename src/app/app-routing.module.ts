import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CardHomeComponent } from './home/card-home/card-home.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import {AboutComponent} from './about/about.component';
import {TropicanaComponent} from './tropicana/tropicana.component';


const routes: Routes = [
  {
    path: 'user',
    component:CardHomeComponent,
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'news',
    component:CardHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component:AboutComponent,
  },
  {
    path: 'tropicana',
    component:TropicanaComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHomeComponent } from './Home/card-home/card-home.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path: '',
    component:CardHomeComponent
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
    path: 'new',
    component:RegisterComponent
  },
  {
    path: '**',
    component:CardHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

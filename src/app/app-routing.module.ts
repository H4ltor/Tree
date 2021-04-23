import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CardHomeComponent } from './home/card-home/card-home.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ShopComponent } from './shop/shop.component';

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
    path: 'shop',
    component:ShopComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

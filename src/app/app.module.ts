import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './_shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardHomeComponent } from './home/card-home/card-home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './_shared/_service/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './_shared/_service/token-interceptor.service';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { TropicanaComponent } from './tropicana/tropicana.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';


@NgModule({
  declarations: [		
    AppComponent,
    CardHomeComponent,
    HeaderHomeComponent,
    RegisterComponent,
    LoginComponent,
    FormComponent,
    AboutComponent,
    TropicanaComponent,
    FooterHomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

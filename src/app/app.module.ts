import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './_sharedHome/material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CardHomeComponent } from './Home/card-home/card-home.component';
import { HeaderHomeComponent } from './Home/header-home/header-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHomeComponent,
    HeaderHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

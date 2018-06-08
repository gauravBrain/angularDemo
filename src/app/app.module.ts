import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { AppComponent } from './app.component';
import { AppRouting, routingComponents} from './app.route';
import { DashboardModule } from './components/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,   
    routingComponents
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot() 
  ],
  exports : [RouterModule], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class HomeModule { }

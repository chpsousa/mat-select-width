import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'ngx-avatar';
import { MatIconModule } from '@angular/material'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppMaterialModule,BrowserAnimationsModule, AvatarModule, MatIconModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

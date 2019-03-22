import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppMaterialModule,BrowserAnimationsModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

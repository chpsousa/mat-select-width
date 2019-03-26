import { Component } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
export interface Unit {
  name: string;
  cityName: string;
  photoUrl: string;
  usersCount: string;
  ceo?: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  units: Unit[] = [
    {name: 'Apple Inc', cityName: 'Cupertino, Califórnia, EUA', photoUrl: 'https://images.vexels.com/media/users/3/139567/isolated/preview/582aca4000ab46231333a1df893c947e-apple-logo-by-vexels.png', usersCount: '46k' },
    {name: 'Microsoft', cityName: 'Redmond, Washington, EUA', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvupQAx9oKgSbeAYir2rFItIvpDdtaliTu55ZZNDKrZLEjgpp', usersCount: '90k' },
    {name: 'IBM', cityName: 'Armonk, New York, EUA', photoUrl: '', usersCount: '17.4k' },
    {name: 'Google', cityName: 'Mountain View, Califórnia, EUA', photoUrl: 'https://www.iosicongallery.com/icons/google-2015-10-22/512.png', usersCount: '124.4k' },
    {name: 'Facebook', cityName: 'Menlo Park, Califórnia, EUA', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN1_g_KYOdoUirCT7LDBS76-laD-CNRNrdM_gunINQxxVjxk-lA', usersCount: '115k' },
  ];
  name = 'Angular';
   
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ['kullaniciSoyad']
})
export class NavbarComponent implements OnInit {

@Input() kullaniciAd:string;
kullaniciSoyad:string;

  constructor() { }

  ngOnInit(): void {
     }

}

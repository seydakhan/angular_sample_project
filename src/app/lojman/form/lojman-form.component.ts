import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILojman } from '../lojman.model';

@Component({
  selector: '[app-lojman-form]',
  templateUrl: './lojman-form.component.html',
  styleUrls: ['./lojman-form.component.css']
})
export class LojmanFormComponent implements OnInit {

  @Input() kayit:ILojman;
  @Output() setKayit:EventEmitter<any> = new EventEmitter;

  // odaSayisi:string;
  // adresIl:number;
  // adresIlce:number;
  // metreKare:string;
  // fiyat:string;
  // isTalepEdildiMi:boolean = false;

  ilList:any[] = [
    {id:1, ad: "ADANA"},
    {id:2, ad: "AMASYA"},
    {id:3, ad: "ANKARA"}
  ]
  tumIlceList:any[] = [
    {id:1, ad: "ALTINDAĞ", ilId:1},
    {id:2, ad: "ÇANKAYA", ilId:3},
    {id:3, ad: "YENIMAHALLE", ilId:2}
  ]

  ilceList:any[];

  constructor() { }

  ngOnInit(): void {
  }

  setIlce(){
    this.ilceList = this.tumIlceList.filter(p=>p.ilId == this.kayit.adres.il);
  }

  kaydet(){
    localStorage.setItem("yeniKayit", JSON.stringify(this.kayit));
    this.setKayit.emit(this.kayit);
  }
}

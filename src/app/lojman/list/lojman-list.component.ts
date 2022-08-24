import { Component, OnInit } from '@angular/core';
import { ILojman } from '../lojman.model';

@Component({
  selector: 'app-lojman-list',
  templateUrl: './lojman-list.component.html',
  styleUrls: ['./lojman-list.component.css']
})
export class LojmanListComponent implements OnInit {
  data:ILojman;
  list?:ILojman[];

  constructor() { }

  ngOnInit(): void {
    // this.list=[{odaSayisi:30, metreKare:100, adres:{il:7, ilce:0, acikAdres:"acik adres Ankara"}, fiyat:300, isTalepEdildi:false},
    //             {odaSayisi:4, metreKare:100, adres:{il:5, ilce:1, acikAdres:"acik adres Ankara"}, fiyat:300, isTalepEdildi:false}]
    this.list= JSON.parse(localStorage.getItem("yeniListe"))
  }

  rowClick(item:ILojman) {
    if(item){
      this.data = item;
      //    item.isTalepEdildi = !item.isTalepEdildi;
    }else {
      this.data = {
        odaSayisi:null,
        adres:{il:null, ilce:null, acikAdres:null},
        metreKare:null,
        fiyat:null,
        isTalepEdildi:false
      }
    }
  }

  listKayit(data:ILojman){
      let item = JSON.parse(localStorage.getItem("yeniKayit"));

      if(!this.list)
        this.list = [];

      this.list.push(item);
      localStorage.setItem("yeniListe", JSON.stringify(this.list));
      localStorage.removeItem("yeniKayit");

  }

}

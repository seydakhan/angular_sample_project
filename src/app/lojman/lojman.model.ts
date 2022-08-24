import { Adres } from './adres.model';

export interface ILojman{
    odaSayisi:number;
    metreKare:number;
    adres:Adres;
    fiyat:number;
    isTalepEdildi?:boolean;
}
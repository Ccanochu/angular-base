import {Component,OnInit} from '@angular/core';
import { Zapatillas } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    
    public title:string="zapatillas component";

    public zapatillas:Array<Zapatillas>;
    constructor(){
        this.zapatillas = [new Zapatillas("Nike Airmax","Nike","Rojas",40,true),
        new Zapatillas("Reebok Classic","Reebok","Blancas",80,true),
        new Zapatillas("Nike Runnner MD","Nike","Negras",60,true),
        new Zapatillas("Adidas Yezzy","Adidas","Grises",160,true)];
    }
    ngOnInit() {
        console.log(this.zapatillas)
    }
}
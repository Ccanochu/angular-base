import {Component,OnInit} from '@angular/core';
import { Zapatillas } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    
    public title:string="zapatillas component";
    public zapatillas:Array<Zapatillas>;
    public marcas:String[];
    constructor(){
        this.zapatillas = [new Zapatillas("Nike Airmax","Nike","Rojas",40,true),
        new Zapatillas("Reebok Classic","Reebok","Blancas",80,true),
        new Zapatillas("Nike Runnner MD","Nike","Negras",60,true),
        new Zapatillas("Adidas Yezzy","Adidas","Grises",160,true),
        new Zapatillas("Reebook Spartan","Reebok","Negra",80,false)];
        this.marcas=[]
    }
    ngOnInit() {
        console.log(this.zapatillas)
        this.getMarcas()
    }
    getMarcas(){
        this.zapatillas.forEach((value,index)=>{

            if(this.marcas.indexOf(value.marca)<0){
                this.marcas.push(value.marca)
            }
            
        })
        console.log(this.marcas)
    }
}
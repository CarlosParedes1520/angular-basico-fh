import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = 'Iroman'
  edad: number = 33
  pais: string = 'EEUU'

  get nombreCapitalizado():string {
    return this.nombre.toUpperCase()
  }

  obtenerDatos(): string{
    return ` El nombre es ${this.nombre} la edad es ${this.edad} el pais es ${this.pais} `
  }

  cambiarNombre():void {
    console.log('nom???');
    
    this.nombre = 'Spiderman'
  }

  cambiarEdad():void {
    console.log('edad????');
    
    this.edad = 25
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('constructor');
    
  }

  heroeBorrado: string = ''

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  listaHeroe: string[] = ['spider','iron','hulk','thor', 'batman']

  borrar(){
    this.heroeBorrado = this.listaHeroe.shift() || ''

  }
}

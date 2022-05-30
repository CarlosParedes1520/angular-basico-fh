import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Contador app';
  contador: number = 10
  base: number =5

  aumentar() {
    this.contador+=this.base;
  }
  
  disminuir() {
    this.contador-=this.base;
  }

}

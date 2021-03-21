import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abajo',
  templateUrl: './abajo.component.html',
  styleUrls: ['./abajo.component.css']
})
export class AbajoComponent implements OnInit {


  public fondo: boolean;
  public mostrar: boolean;
  public habilitar: boolean;
  public myURL: string;
  public myText: string;

  constructor() {
    this.fondo = false;
    this.mostrar = false;
    this.habilitar = false;
    this.myURL = 'https://google.com/';
    this.myText = 'Escribe aquí al lado';
  }

  ngOnInit(): void {}

  public cambiar(): void{
    console.log("Hiciste click aquí")
    this.fondo = !this.fondo;
    this.mostrar = !this.mostrar;
    this.habilitar = !this.habilitar;
  }

  public otroCambio(): void{
    this.mostrar = !this.mostrar;
    this.habilitar = !this.habilitar;
  }

}

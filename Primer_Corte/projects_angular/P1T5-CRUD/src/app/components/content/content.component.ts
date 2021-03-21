import { Component, OnInit } from '@angular/core';
import { Sitios } from '../../models/sitios';
import { SITIOS } from '../../mocks/sitios-mock'
import { config } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public sitioSeleccionado : Sitios;
  public arregloSitios : Sitios[];

  constructor() {
    this.sitioSeleccionado = new Sitios(0,'',0,0);
    this.arregloSitios = SITIOS;
  }

  ngOnInit(): void {
  }

  public seleccionar(tempSitio:Sitios):void{
    this.sitioSeleccionado = tempSitio;
  }

  public cancelar():void{
    this.sitioSeleccionado = new Sitios(0,'',0,0);
  }

  public procesarSitio():void{
    if(this.sitioSeleccionado.cod_sitio === 0){
      this.sitioSeleccionado.cod_sitio = this.arregloSitios.length + 1;
      this.arregloSitios.push(this.sitioSeleccionado);
    }
    this.sitioSeleccionado = new Sitios(0,'',0,0);
  }

  public eliminarSitio():void{
    if(confirm('¿Eliminar el sitio de la lista?')) {
      this.arregloSitios = this.arregloSitios.filter(elemento => elemento != this.sitioSeleccionado);
      this.sitioSeleccionado = new Sitios(0,'',0,0);
    }
  }
}

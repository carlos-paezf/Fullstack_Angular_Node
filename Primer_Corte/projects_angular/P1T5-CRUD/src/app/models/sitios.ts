export class Sitios{
  cod_sitio : number;
  nombre_sitio : string;
  capacidad_sitio : number;
  codsede_sitio: number;

  constructor(cod:number, nom:string, cap:number, codsede:number){
    this.cod_sitio = cod;
    this.nombre_sitio = nom;
    this.capacidad_sitio = cap;
    this.codsede_sitio = codsede;

  }
}

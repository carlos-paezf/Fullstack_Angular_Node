export class Post{
  public cod: number;
  public name: string;
  public description: string;
  public publicationDate: string;
  public photo : string;
  public photoBase64: string;

  constructor(cod:number, name:string, description:string, publicationDate:string, photo:string, photoBase64:string){
    this.cod = cod;
    this.name = name;
    this.description = description;
    this.publicationDate = publicationDate;
    this.photo = photo;
    this.photoBase64 = photoBase64;
  }

}

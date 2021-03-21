export class Publication{
  public cod: number;
  public category: string;
  public title: string;
  public date: Date;
  public content: string;
  public photo: string;
  public photoBase64: string;

  constructor(cod:number, category:string, title:string, date:Date, content:string, photo:string, photoBase64:string){
    this.cod = cod;
    this.category = category;
    this.title = title;
    this.date = date;
    this.content = content;
    this.photo = photo;
    this.photoBase64 = photoBase64;
  }
}

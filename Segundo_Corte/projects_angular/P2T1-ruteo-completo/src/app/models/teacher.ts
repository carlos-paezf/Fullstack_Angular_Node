export class Teacher {
  public cod: number;
  public document: number;
  public nameTeacher: string;
  public photo: string;
  public photoBase64: string;

  constructor(cod: number, document: number, nameTeacher: string, photo: string, photoBase64: string){
    this.cod = cod;
    this.document = document;
    this.nameTeacher = nameTeacher;
    this.photo = photo;
    this.photoBase64 = photoBase64;
  }
}

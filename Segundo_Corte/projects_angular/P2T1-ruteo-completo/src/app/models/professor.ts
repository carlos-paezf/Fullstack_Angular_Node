export class Professor {
  public cod: number;
  public document: number;
  public nameProfessor: string;
  public photo: string;
  public photoBase64: string;

  constructor(cod: number, document: number, nameProfessor: string, photo: string, photoBase64: string){
    this.cod = cod;
    this.document = document;
    this.nameProfessor = nameProfessor;
    this.photo = photo;
    this.photoBase64 = photoBase64;
  }
}

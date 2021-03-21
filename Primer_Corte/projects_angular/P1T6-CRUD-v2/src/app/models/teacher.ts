export class Teacher{
  public cod : number;
  public nameTeacher : string;
  public course : string;
  public photo : string;
  public photoBase64: string;

  constructor(cod:number, nameTeacher:string, course:string, photo:string, photoBase64:string){
    this.cod = cod;
    this.nameTeacher = nameTeacher;
    this.course = course;
    this.photo = photo;
    this.photoBase64 = photoBase64;
  }
}

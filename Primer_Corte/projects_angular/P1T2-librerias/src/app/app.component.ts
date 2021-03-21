import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //! Attributes
  public title = 'p1t2-librerias';
  public myText:string;

  //! Constructor
  constructor(){
    this.myText = 'Texto de prueba';
  }

  //! Methods
  public view(){
    this.myText = 'Cambio en el texto prueba';
  }
}

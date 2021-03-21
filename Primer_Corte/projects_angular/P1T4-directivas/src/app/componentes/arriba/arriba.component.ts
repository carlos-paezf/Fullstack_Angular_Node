import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arriba',
  templateUrl: './arriba.component.html',
  styleUrls: ['./arriba.component.css']
})
export class ArribaComponent implements OnInit {

  //! Attributes
  public title: string;

  constructor() {
    this.title = 'Conociendo directivas sencillas';
  }

  ngOnInit(): void {
  }

}

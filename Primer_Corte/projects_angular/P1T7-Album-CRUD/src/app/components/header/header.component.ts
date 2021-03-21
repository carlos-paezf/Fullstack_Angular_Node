import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title:string;
  public about:string;

  constructor() {
    this.title = 'Album CRUD';
    this.about = 'Cualquier locura puede estar incluida justo aquí'
  }

  ngOnInit(): void {
  }

}

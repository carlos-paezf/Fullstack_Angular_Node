import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ARRAY_PROFESSOR } from '../../../mocks/professor-mock';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './professor-view.component.html',
  styleUrls: ['./professor-view.component.css']
})
export class ProfessorViewComponent implements OnInit {

  public arrayProfessors: Array<Professor>;
  public actualPage: number;
  public amountShowRecords: number;
  public amountTotalRecords: number;
  public amountTotalPages: number;
  //! public amountShowPages: number;

  constructor() {
    this.arrayProfessors = ARRAY_PROFESSOR;
    this.actualPage = 1;
    this.amountShowRecords = 10;
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
    //! this.amountTotalPages = 0;
  }

  ngOnInit(): void {
  }

}

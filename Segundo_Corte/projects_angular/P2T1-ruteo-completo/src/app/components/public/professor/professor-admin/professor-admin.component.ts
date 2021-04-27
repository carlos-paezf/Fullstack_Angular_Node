import { Component, OnInit } from '@angular/core';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-teacher-admin',
  templateUrl: './professor-admin.component.html',
  styleUrls: ['./professor-admin.component.css'],
  providers: [ArrayPipe]
})
export class ProfessorAdminComponent implements OnInit {

  public arrayProfessors: Array<Professor>;
  public actualPage: number;
  public amountShowRecords: number;
  public amountTotalRecords: number;
  public amountTotalPages: number;

  constructor(private order: ArrayPipe) {
    const parameters = ['document', 'aSC'];
    //! this.arrayProfessors = ARRAY_PROFESSOR;
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
    this.actualPage = 1;
    this.amountShowRecords = 5;
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  providers: [ArrayPipe]
})
export class SideMenuComponent implements OnInit {

  public arrayProfessors: Array<Professor>;
  public objSelectedProfessor: Professor;

  constructor(private order: ArrayPipe) {
    this.arrayProfessors = [];
    this.objSelectedProfessor = new Professor(0,0,'','','');
  }

  ngOnInit(): void {
    const parameters = ['nameProfessor', 'ASC'];
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
  }

  public selectProfessor(obj: Professor): void {
    this.objSelectedProfessor = obj;
  }

  public initialize():void{
    const parameters = ['nameProfessor', 'ASC'];
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
    this.objSelectedProfessor = new Professor(0, 0, '', '', '');
  }
}

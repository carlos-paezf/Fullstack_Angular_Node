import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { Professor } from 'src/app/models/professor';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public arrayProfessorsUniversities: Array<ProfessorUniversity>;
  public amountUniversities: number;
  public selectedProfessorUniversity: ProfessorUniversity;
  public tmp: any;

  constructor(private route: ActivatedRoute) {
    this.arrayProfessorsUniversities = [];
    this.amountUniversities = 0;
    this.selectedProfessorUniversity = new ProfessorUniversity(new Professor(0,0,'','',''), new University(0,'','',''));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameter: ParamMap)=>{
      this.tmp = parameter.get('codProfessor');
      const professorCod = parseFloat(this.tmp);
      if(Number.isNaN(professorCod) || professorCod==0){
        this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY;
        this.tmp = 0;
      } else {
        this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY.filter(
          (professorUniversity)=> professorUniversity.codProfessor.cod === professorCod
        );
      }
      this.amountUniversities = this.arrayProfessorsUniversities.length;
      this.selectedProfessorUniversity = new ProfessorUniversity(new Professor(0, 0, '', '', ''), new University(0, '', '', ''));
    });
  }

  public selectProfessorUniversity(obj: ProfessorUniversity): void{
    this.selectedProfessorUniversity = obj;
  }

}

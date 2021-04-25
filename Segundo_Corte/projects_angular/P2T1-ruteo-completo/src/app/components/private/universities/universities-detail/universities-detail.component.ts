import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { Professor } from 'src/app/models/professor';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-universities-detail',
  templateUrl: './universities-detail.component.html',
  styleUrls: ['./universities-detail.component.css']
})
export class UniversitiesDetailComponent implements OnInit {

  public arrayUniversitiesProfessors: Array<ProfessorUniversity>;
  public amountProfessors: number;
  public selectedUniversityProfessor: ProfessorUniversity;
  public tmp: any;

  constructor(private route: ActivatedRoute) {
    this.arrayUniversitiesProfessors = [];
    this.amountProfessors = 0;
    this.selectedUniversityProfessor = new ProfessorUniversity(new Professor(0, 0, '', '', ''), new University(0, '', '', ''));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      this.tmp = parameter.get('codUniversity');
      const universityCod = parseFloat(this.tmp);
      if (Number.isNaN(universityCod) || universityCod == 0) {
        this.arrayUniversitiesProfessors = ARRAY_PROFESSOR_UNIVERSITY;
        this.tmp = 0;
      } else {
        this.arrayUniversitiesProfessors = ARRAY_PROFESSOR_UNIVERSITY.filter(
          (professorUniversity) => professorUniversity.codUniversity.cod === universityCod
        );
      }
      this.amountProfessors = this.arrayUniversitiesProfessors.length;
      this.selectedUniversityProfessor = new ProfessorUniversity(new Professor(0, 0, '', '', ''), new University(0, '', '', ''));
    });
  }

  public selectUniversityProfessor(obj: ProfessorUniversity): void {
    this.selectedUniversityProfessor = obj;
  }

}

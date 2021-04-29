import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { Professor } from 'src/app/models/professor';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-associate-university-with-professor',
  templateUrl: './associate-university-with-professor.component.html',
  styleUrls: ['./associate-university-with-professor.component.css']
})
export class AssociateUniversityWithProfessorComponent implements OnInit {

  public arrayProfessorsUniversities: Array<ProfessorUniversity>;
  public arrayProfessors: Array<Professor>;
  public arrayUniversities: Array<University>;
  public objProfessorUniversity: ProfessorUniversity;
  public objProfessor: Professor;
  public objUniversity: University;

  constructor(private toastr: ToastrService, private router: Router) {
    this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY;
    this.arrayProfessors = ARRAY_PROFESSOR;
    this.arrayUniversities = ARRAY_UNIVERSITY;
    this.objProfessorUniversity = new ProfessorUniversity(new Professor(0, '', '', '', ''), new University(0, '', '', ''));
    this.objProfessor = new Professor(0, '', '', '', '');
    this.objUniversity = new University(0, '', '', '');
  }

  ngOnInit(): void {
  }

  public selectProfessor(objPro: Professor): void {
    this.objProfessor = objPro;
  }

  public selectUniversity(objUni: University): void {
    this.objUniversity = objUni;
  }

  public createAssociate(objPro: Professor, objUni: University): void {
    this.objProfessorUniversity = new ProfessorUniversity(objPro, objUni);
    if (this.objProfessorUniversity.codProfessor.cod == 0 && this.objProfessorUniversity.codUniversity.cod == 0) {
      this.ToastrModal('Los codigos no pueden ser nulos', 'ERROR', 4);
    } else {
      if (ARRAY_PROFESSOR_UNIVERSITY.find((profe) =>
        profe.codProfessor.cod === this.objProfessorUniversity.codProfessor.cod &&
        profe.codUniversity.cod === this.objProfessorUniversity.codUniversity.cod
      )) {
        this.ToastrModal('Universidad ya vinculada', 'Error', 3);
      } else if (this.objProfessorUniversity.codProfessor.cod == 0 || this.objProfessorUniversity.codUniversity.cod == 0) {
        this.ToastrModal('No se admiten datos sin seleccionar', 'Warning', 3);
      } else {
        ARRAY_PROFESSOR_UNIVERSITY.push(this.objProfessorUniversity);
        this.ToastrModal('Linkage has been <b>successful</b>', 'Success', 1);
        this.router.navigate(['/external/professor/professor-detail']);
      }
    }
  }


  public ToastrModal(message: string, title: string, opcion: number): void {
    const parameters = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeout: 8000
    };
    switch (opcion) {
      case 1:
        this.toastr.success(message, title, parameters);
        break;
      case 2:
        this.toastr.info(message, title, parameters);
        break;
      case 3:
        this.toastr.warning(message, title, parameters);
        break;
      case 4:
        this.toastr.error(message, title, parameters);
        break;

      default:
        break;
    }
  }
}

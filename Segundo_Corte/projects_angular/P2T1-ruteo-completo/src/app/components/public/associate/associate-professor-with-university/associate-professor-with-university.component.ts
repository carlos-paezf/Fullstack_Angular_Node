import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { Professor } from 'src/app/models/professor';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-associate-professor-with-university',
  templateUrl: './associate-professor-with-university.component.html',
  styleUrls: ['./associate-professor-with-university.component.css'],
  providers: [ArrayPipe]
})
export class AssociateProfessorWithUniversityComponent implements OnInit {

  public arrayProfessorsUniversities: Array<ProfessorUniversity>;
  public arrayUniversities: Array<University>;
  public arrayProfessors: Array<Professor>;
  public objProfessorUniversity: ProfessorUniversity;
  public objUniversity: University;
  public objProfessor: Professor;
  public tempArray: any;
  public selectedCheck: boolean;

  constructor(private order: ArrayPipe, private toastr: ToastrService, private router: Router) {
    this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY;
    this.arrayUniversities = ARRAY_UNIVERSITY;
    this.arrayProfessors = ARRAY_PROFESSOR;
    this.objProfessorUniversity = new ProfessorUniversity(new Professor(0, '', '', '', ''), new University(0, '', '', ''));
    this.objUniversity = new University(0, '', '', '');
    this.objProfessor = new Professor(0, '', '', '', '');
    this.tempArray = [];
    this.selectedCheck = false;
  }

  ngOnInit(): void {
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, ['nameUniversity', 'ASC']);
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, ['nameProfessor', 'ASC']);
  }

  public selectUniversity(obj: University): void {
    this.objUniversity = obj;
  }

  public selectProfessor(obj: Professor): void {
    if (!this.selectedCheck) {
      if (!this.tempArray.includes(obj)) {
        this.tempArray.push(this.objProfessor = obj);
      }
    } else {
      let pos = this.tempArray.indexOf(obj);
      delete this.tempArray[pos];
    }
    console.log(this.tempArray);
  }

  public createAssociate(objUni: University, objPro: Professor): void {
    this.objProfessorUniversity = new ProfessorUniversity(objPro, objUni);

    if (this.objProfessorUniversity.codUniversity.cod == 0 && this.objProfessorUniversity.codProfessor.cod == 0) {
      this.ToastrModal('The codes can not be null', 'ERROR', 4);
    } else {
      if (ARRAY_PROFESSOR_UNIVERSITY.find((profUni) =>
        profUni.codProfessor.cod === this.objProfessorUniversity.codProfessor.cod ||
        profUni.codUniversity.cod === this.objProfessorUniversity.codUniversity.cod
      )) {
        this.ToastrModal('Professor already linked', 'Error', 3);
      } else if (this.objProfessorUniversity.codProfessor.cod == 0 || this.objProfessorUniversity.codUniversity.cod == 0) {
        this.ToastrModal('Details are not allowed without selecting', 'Warning', 3);
      } else {
        for (let index = 0; index < this.tempArray.length; index++) {
          const element = this.tempArray[index];
          this.objProfessorUniversity = new ProfessorUniversity(element, this.objUniversity);
          ARRAY_PROFESSOR_UNIVERSITY.push(this.objProfessorUniversity);
        }
        this.ToastrModal('Linkage has been <b>successful</b>', 'Success', 1);
        this.router.navigate(['/external/university/university-detail']);
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

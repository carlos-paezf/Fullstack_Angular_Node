import { Component, OnInit, TemplateRef } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TEACHERS } from '../../mocks/teacher-mocks';

import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public selectedTeacher : Teacher;
  public arrayTeachers: Teacher[];
  public tempBase64: any;
  public modalRef: BsModalRef;
  public modalTitle: string;
  public modalText: string;
  public modalContent: string;

  constructor(public modalService:BsModalService, private toastr:ToastrService) {
    this.selectedTeacher = new Teacher(0,'','','','');
    this.arrayTeachers = TEACHERS;
    this.modalRef = modalService.show('');
    this.modalTitle = '';
    this.modalText = '';
    this.modalContent = '';
  }

  ngOnInit(): void {
  }

  public select(tempTeacher:Teacher):void {
    this.selectedTeacher = tempTeacher;
  }

  public cancel():void{
    this.selectedTeacher = new Teacher(0,'','','','');
  }

  public processTeacher():void{
    if(this.selectedTeacher.cod === 0){
      this.addTeacher();
    }
    this.selectedTeacher = new Teacher(0,'','','','');
  }

  public addTeacher():boolean{
    if(this.selectedTeacher.nameTeacher === '' || this.selectedTeacher.course === ''){
      this.ToastrError('There are <b>empty fields</b> in the form', 'Error');
    return false;
    } else {
      this.selectedTeacher.cod = this.arrayTeachers.length + 1;
      this.arrayTeachers.push(this.selectedTeacher);
      return true;
    }
  }

  public deleteTeacher(objTeacher:Teacher):void{
    //if(confirm('Remove this teacher from the list?')){}
    this.arrayTeachers = this.arrayTeachers.filter(element => element != objTeacher);
    this.selectedTeacher = new Teacher(0,'','','','');
  }

  public delete():void{
    this.deleteTeacher(this.selectedTeacher);
    this.modalRef.hide();
  }

  public cancelDelete():void{
    this.modalRef.hide();
  }

  public openModal(template:TemplateRef<any>, teacherTMP: Teacher): void{
    this.selectedTeacher = teacherTMP;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Alert';
    this.modalText = 'Remove this teacher from the list?';
    this.modalContent = 'Name: ' + this.selectedTeacher.nameTeacher
                      + 'Course: ' + this.selectedTeacher.course;
  }

  public selectPhoto(input:any):any{
    if(!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.ToastrWarning('Only <b>Images</b> are followed', 'Warning');
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload  = () => {
      this.tempBase64 = reader.result;
      this.selectedTeacher.photoBase64 = this.tempBase64;
      this.selectedTeacher.photo = input.target.files[0].name;
    };
  }




  /*Mas adelante se puede cambiar dentro de una clase*/
  public ToastrError(message:string, title:string):void{
    const parameters = {
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        timeout: 8000
      };
      this.toastr.error(message, title, parameters);
  }
  public ToastrWarning(message:string, title:string):void{
    const parameters = {
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        timeout: 8000
      };
      this.toastr.warning(message, title, parameters);
  }

}

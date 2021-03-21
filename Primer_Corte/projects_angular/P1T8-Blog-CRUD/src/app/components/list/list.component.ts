import { Component, OnInit, TemplateRef } from '@angular/core';

import { Publication } from '../../models/publication';
import { PUBLICATIONS } from '../../mocks/publication-mocks';

import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //? Publication attributes
  public selectedPublication : Publication;
  public arrayPublications: Publication[];
  public tempBase64: any;

  //? Modal attributes
  public trick: any;
  public modalRef: BsModalRef;
  public modalTitle: string;
  public modalText: string;
  public modalContent: string;
  public modalTitlePublication: string;
  public modalContentPublication: string;

  constructor(public modalService:BsModalService, private toastr:ToastrService) {
    this.selectedPublication = new Publication(0,'','', new Date() ,'','','');
    this.arrayPublications = PUBLICATIONS;
    this.modalRef = this.trick;
    this.modalTitle = '';
    this.modalText = '';
    this.modalContent = '';
    this.modalTitlePublication = '';
    this.modalContentPublication = '';
  }

  ngOnInit(): void {
  }

  public select(tempPublication:Publication):void {
    this.selectedPublication = tempPublication;
  }

  public cancel():void{
    this.selectedPublication = new Publication(0,'','', new Date() ,'','','');
  }

  public processPublication():void{
    this.modalRef.hide();
    this.ToastrModal('Publication was <b>successfully updated</b>', 'Info', 2);
  }

  public deletePublication(objPublication:Publication):void{
    this.arrayPublications = this.arrayPublications.filter(element => element != objPublication);
    this.selectedPublication = new Publication(0,'','', new Date() ,'','','');
  }

  public delete():void{
    this.deletePublication(this.selectedPublication);
    this.modalRef.hide();
    this.ToastrModal('Publication was <b>successfully removed</b>', 'Alert', 2);
  }

  public cancelDelete():void{
    this.modalRef.hide();
  }

  public openModalDeletePublication(template:TemplateRef<any>, teacherTMP: Publication): void{
    this.selectedPublication = teacherTMP;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Alert';
    this.modalText = 'Remove this Publication from the list?';
    this.modalTitlePublication = this.selectedPublication.title;
    this.modalContentPublication = this.selectedPublication.content;
  }

  public openModalEditPublication(template:TemplateRef<any>, teacherTMP: Publication): void{
    this.selectedPublication = teacherTMP;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Edit this Publication';
    this.modalContent = 'Name: ' + this.selectedPublication.title
                      + 'Content: ' + this.selectedPublication.content
                      + 'Photo: ' + this.selectedPublication.photo;
  }

  public selectPhoto(input:any):any{
    if(!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.ToastrModal('Only <b>Images</b> are followed', 'Warning', 3);
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload  = () => {
      this.tempBase64 = reader.result;
      this.selectedPublication.photoBase64 = this.tempBase64;
      this.selectedPublication.photo = input.target.files[0].name;
    };
  }


  /*Mas adelante se puede cambiar dentro de una clase*/
  public ToastrModal(message:string, title:string, opcion:number):void{
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

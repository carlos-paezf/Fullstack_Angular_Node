import { Component, OnInit, TemplateRef } from '@angular/core';

import { Publication } from '../../models/publication';
import { PUBLICATIONS } from '../../mocks/publication-mocks';

import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/models/category';
import { CATEGORIES } from 'src/app/mocks/category-mocks';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //? Description attributes
  public titleDescription: string;
  public description: string;

  //? Category attributes
  public selectedCategory : Category;
  public arrayCategories : Category[];

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
  public modalNamePublication: string;
  public modalPhotoPublication: string;

  constructor(public modalService:BsModalService, private toastr:ToastrService) {
    this.titleDescription = 'Tomasino newspaper';
    this.description = 'This is just a simple project example applying the CRUD and Bootstrap theme in Angular. The theme is from a newspaper with various categories. Here are only the functionalities of the cards.';
    this.selectedCategory = new Category(0,'');
    this.arrayCategories = CATEGORIES;
    this.selectedPublication = new Publication(0,'','', new Date() ,'','','');
    this.arrayPublications = PUBLICATIONS;
    this.modalRef = this.trick;
    this.modalTitle = '';
    this.modalText = '';
    this.modalContent = '';
    this.modalNamePublication = '';
    this.modalPhotoPublication = '';
  }

  ngOnInit(): void {
  }

  public select(tempPublication:Publication):void {
    this.selectedPublication = tempPublication;
  }

  public cancel():void{
    this.selectedPublication = new Publication(0,'','', new Date() ,'','','');
  }

  public addPublication():boolean{
    if(this.selectedPublication.category === '' || this.selectedPublication.title === '' || this.selectedPublication.content === ''){
      this.ToastrModal('There are <b>empty fields</b> in the form', 'Error', 4);
    return false;
    } else {
      this.selectedPublication.cod = this.arrayPublications.length + 1;
      this.arrayPublications.push(this.selectedPublication);
      this.ToastrModal('Publication was <b>created successfully</b>', 'Success', 1);
      this.modalRef.hide();
      return true;
    }
  }

  public addCategory():boolean{
    if(this.selectedCategory.name === ''){
      this.ToastrModal('There are <b>empty fields</b> in the form', 'Error', 4);
    return false;
    } else {
      this.selectedCategory.cod = this.arrayPublications.length + 1;
      this.arrayCategories.push(this.selectedCategory);
      this.ToastrModal('Category was <b>created successfully</b>', 'Success', 1);
      this.modalRef.hide();
      return true;
    }
  }

  public openModalAdd(template:TemplateRef<any>): void{
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Add a new element';
    this.selectedPublication = new Publication(0, '', '', new Date(), '', '', '');
    this.selectedCategory = new Category(0, '');
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

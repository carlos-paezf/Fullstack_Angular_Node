import { Component, OnInit, TemplateRef } from '@angular/core';
import { Post } from '../../models/post';
import { POSTS } from '../../mocks/post-mocks';

import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //? Description attributes
  public titleDescription: string;
  public description: string;

  //? Post attributes
  public selectedPost : Post;
  public arrayPosts: Post[];
  public tempBase64: any;

  //? Modal attributes
  public trick: any;
  public modalRef: BsModalRef;
  public modalTitle: string;
  public modalText: string;
  public modalContent: string;
  public modalNamePost: string;
  public modalPhotoPost: string;

  constructor(public modalService:BsModalService, private toastr:ToastrService) {
    this.titleDescription = 'Tomasino Album';
    this.description = 'This is an album created with Angular, applying the knowledge obtained in the First Period of the Fullstack Angular Node.js matter';
    this.selectedPost = new Post(0,'','','','','');
    this.arrayPosts = POSTS;
    this.modalRef = this.trick;
    this.modalTitle = '';
    this.modalText = '';
    this.modalContent = '';
    this.modalNamePost = '';
    this.modalPhotoPost = '';
  }

  ngOnInit(): void {
  }

  public select(tempPost:Post):void {
    this.selectedPost = tempPost;
  }

  public cancel():void{
    this.selectedPost = new Post(0,'','','','','');
  }

  public editPost():void{
    this.ToastrModal('Post was <b>successfully updated</b>', 'Info', 2);
  }

  public addPost():boolean{
    if(this.selectedPost.name === '' || this.selectedPost.description === '' || this.selectedPost.photo === ''){
      this.ToastrModal('There are <b>empty fields</b> in the form', 'Error', 4);
    return false;
    } else {
      this.selectedPost.cod = this.arrayPosts.length + 1;
      this.arrayPosts.push(this.selectedPost);
      this.ToastrModal('Post was <b>created successfully</b>', 'Success', 1);
      return true;
    }
  }

  public deletePost(objPost:Post):void{
    this.arrayPosts = this.arrayPosts.filter(element => element != objPost);
    this.selectedPost = new Post(0,'','','','','');
  }

  public delete():void{
    this.deletePost(this.selectedPost);
    this.modalRef.hide();
    this.ToastrModal('Post was <b>successfully removed</b>', 'Alert', 2);
  }

  public cancelDelete():void{
    this.modalRef.hide();
  }

  public openModalDeletePost(template:TemplateRef<any>, teacherTMP: Post): void{
    this.selectedPost = teacherTMP;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Alert';
    this.modalText = 'Remove this post from the list?';
    this.modalNamePost = 'Name: ' + this.selectedPost.name;
    this.modalPhotoPost = 'Photo: ' + this.selectedPost.photo;
  }

  public openModalEditPost(template:TemplateRef<any>, teacherTMP: Post): void{
    this.selectedPost = teacherTMP;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Edit this Post';
    this.modalContent = 'Name: ' + this.selectedPost.name
                      + 'Photo: ' + this.selectedPost.photo;
  }

  public openModalAddPost(template:TemplateRef<any>): void{
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.modalTitle = 'Add a new Post';
    this.selectedPost = new Post(0,'','','','','');
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
      this.selectedPost.photoBase64 = this.tempBase64;
      this.selectedPost.photo = input.target.files[0].name;
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

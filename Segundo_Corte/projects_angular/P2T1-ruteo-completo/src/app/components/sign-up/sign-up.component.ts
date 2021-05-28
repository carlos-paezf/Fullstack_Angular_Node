import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public objUser: Users;
  public subscription: Subscription;
  public patternEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  public tmp: any;

  constructor(private toastr:ToastrService, private router:Router, private service:UsersService) {
    this.objUser = new Users(0, 0, '', '', '');
    this.subscription = this.tmp;
  }

  ngOnInit(): void {
  }

  //!. Rol 1: Admin
  //!. Rol 2: Invitado

  public createUser(form:NgForm): void{
    const myHash = sha512.sha512(this.objUser.password);
    var newUser = new Users(0, 2, this.objUser.email, myHash, myHash);
    delete newUser.repassword;
    delete newUser.cod;

    //? Consumo del servicio del Backend
    this.subscription = this.service.serviceCreate(newUser).subscribe(
      (out) => {
        localStorage.setItem('token', out.token);
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log(error);
        this.ToastrModal('Error in Sign Up', 'Error', 4);
        form.resetForm();
      }
    );
  }


  public ToastrModal(message: string, title: string, opcion: number) {
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


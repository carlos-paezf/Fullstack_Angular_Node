import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherCreateComponent } from './components/public/teacher-create/teacher-create.component';
import { TeacherEditComponent } from './components/public/teacher-edit/teacher-edit.component';
import { TeacherViewComponent } from './components/public/teacher-view/teacher-view.component';
import { TeacherPrincipalComponent } from './components/public/teacher-principal/teacher-principal.component';
import { SideMenuComponent } from './components/private/side-menu/side-menu.component';
import { PrincipalComponent } from './components/private/principal/principal.component';
import { DetailComponent } from './components/private/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NotFoundComponent,
    HomeComponent,
    TeacherCreateComponent,
    TeacherEditComponent,
    TeacherViewComponent,
    TeacherPrincipalComponent,
    SideMenuComponent,
    PrincipalComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

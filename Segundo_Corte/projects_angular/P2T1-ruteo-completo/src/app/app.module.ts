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
import { ProfessorCreateComponent } from './components/public/professor-create/professor-create.component';
import { ProfessorEditComponent } from './components/public/professor-edit/professor-edit.component';
import { ProfessorViewComponent } from './components/public/professor-view/professor-view.component';
import { ProfessorPrincipalComponent } from './components/public/professor-principal/professor-principal.component';
import { SideMenuComponent } from './components/private/side-menu/side-menu.component';
import { PrincipalComponent } from './components/private/principal/principal.component';
import { DetailComponent } from './components/private/detail/detail.component';
import { ArrayPipe } from './pipes/array.pipe';
import { ProfessorAdminComponent } from './components/public/professor-admin/professor-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NotFoundComponent,
    HomeComponent,
    ProfessorCreateComponent,
    ProfessorEditComponent,
    ProfessorViewComponent,
    ProfessorPrincipalComponent,
    ProfessorAdminComponent,
    SideMenuComponent,
    PrincipalComponent,
    DetailComponent,
    ArrayPipe
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

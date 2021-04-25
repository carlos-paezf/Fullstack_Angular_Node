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
import { PrincipalComponent } from './components/private/principal/principal.component';
import { ArrayPipe } from './pipes/array.pipe';
import { ProfessorAdminComponent } from './components/public/professor-admin/professor-admin.component';

import { ProfessorsPrincipalComponent } from './components/private/professors/professors-principal/professors-principal.component';
import { ProfessorsDetailComponent } from './components/private/professors/professors-detail/professors-detail.component';
import { ProfessorsSideMenuComponent } from './components/private/professors/professors-side-menu/professors-side-menu.component';
import { UniversitiesSideMenuComponent } from './components/private/universities/universities-side-menu/universities-side-menu.component';
import { UniversitiesDetailComponent } from './components/private/universities/universities-detail/universities-detail.component';
import { UniversitiesPrincipalComponent } from './components/private/universities/universities-principal/universities-principal.component';

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
    PrincipalComponent,
    ArrayPipe,
    ProfessorsPrincipalComponent,
    ProfessorsDetailComponent,
    ProfessorsSideMenuComponent,
    UniversitiesSideMenuComponent,
    UniversitiesDetailComponent,
    UniversitiesPrincipalComponent
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

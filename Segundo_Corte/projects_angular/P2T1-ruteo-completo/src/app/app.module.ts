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
import { AccessComponent } from './components/access/access.component';
import { ArrayPipe } from './pipes/array.pipe';
import { PrincipalComponent } from './components/private/principal/principal.component';

import { ProfessorAdminComponent } from './components/public/professor/professor-admin/professor-admin.component';
import { ProfessorCreateComponent } from './components/public/professor/professor-create/professor-create.component';
import { ProfessorEditComponent } from './components/public/professor/professor-edit/professor-edit.component';
import { ProfessorViewComponent } from './components/public/professor/professor-view/professor-view.component';
import { ProfessorPrincipalComponent } from './components/public/professor/professor-principal/professor-principal.component';

import { UniversityAdminComponent } from './components/public/university/university-admin/university-admin.component';
import { UniversityCreateComponent } from './components/public/university/university-create/university-create.component';
import { UniversityEditComponent } from './components/public/university/university-edit/university-edit.component';
import { UniversityPrincipalComponent } from './components/public/university/university-principal/university-principal.component';
import { UniversityViewComponent } from './components/public/university/university-view/university-view.component';

import { ProfessorsPrincipalComponent } from './components/private/professors/professors-principal/professors-principal.component';
import { ProfessorsDetailComponent } from './components/private/professors/professors-detail/professors-detail.component';
import { ProfessorsSideMenuComponent } from './components/private/professors/professors-side-menu/professors-side-menu.component';

import { UniversitiesSideMenuComponent } from './components/private/universities/universities-side-menu/universities-side-menu.component';
import { UniversitiesDetailComponent } from './components/private/universities/universities-detail/universities-detail.component';
import { UniversitiesPrincipalComponent } from './components/private/universities/universities-principal/universities-principal.component';
import { ValidationComponent } from './components/access/validation/validation.component';
import { AssociateUniversityWithProfessorComponent } from './components/public/associate/associate-university-with-professor/associate-university-with-professor.component';
import { AssociateProfessorWithUniversityComponent } from './components/public/associate/associate-professor-with-university/associate-professor-with-university.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MzDashboardComponent } from './components/mz-dashboard/mz-dashboard.component';


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
    UniversitiesPrincipalComponent,
    AccessComponent,
    UniversityAdminComponent,
    UniversityCreateComponent,
    UniversityEditComponent,
    UniversityPrincipalComponent,
    UniversityViewComponent,
    ValidationComponent,
    AssociateUniversityWithProfessorComponent,
    AssociateProfessorWithUniversityComponent,
    CreateUserComponent,
    MzDashboardComponent
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

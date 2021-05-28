import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrincipalComponent } from './components/private/principal/principal.component';
import { ProfessorsDetailComponent } from './components/private/professors/professors-detail/professors-detail.component';
import { ProfessorsPrincipalComponent } from './components/private/professors/professors-principal/professors-principal.component';
import { ProfessorAdminComponent } from './components/public/professor/professor-admin/professor-admin.component';
import { ProfessorCreateComponent } from './components/public/professor/professor-create/professor-create.component';
import { ProfessorEditComponent } from './components/public/professor/professor-edit/professor-edit.component';
import { ProfessorPrincipalComponent } from './components/public/professor/professor-principal/professor-principal.component';
import { ProfessorViewComponent } from './components/public/professor/professor-view/professor-view.component';
import { UniversitiesDetailComponent } from './components/private/universities/universities-detail/universities-detail.component';
import { UniversitiesPrincipalComponent } from './components/private/universities/universities-principal/universities-principal.component';
import { UniversityPrincipalComponent } from './components/public/university/university-principal/university-principal.component';
import { UniversityCreateComponent } from './components/public/university/university-create/university-create.component';
import { UniversityEditComponent } from './components/public/university/university-edit/university-edit.component';
import { UniversityViewComponent } from './components/public/university/university-view/university-view.component';
import { UniversityAdminComponent } from './components/public/university/university-admin/university-admin.component';
import { AssociateUniversityWithProfessorComponent } from './components/public/associate/associate-university-with-professor/associate-university-with-professor.component';
import { AssociateProfessorWithUniversityComponent } from './components/public/associate/associate-professor-with-university/associate-professor-with-university.component';
import { MzDashboardComponent } from './components/mz-dashboard/mz-dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GuardianGuard } from './guardian.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'access', component: AccessComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: MzDashboardComponent, canActivate: [GuardianGuard] },
  { path: 'professor', component: ProfessorPrincipalComponent, children: [
    { path: 'create', component: ProfessorCreateComponent },
    { path: 'edit/:codProfessor', component: ProfessorEditComponent },
    { path: 'view', component: ProfessorViewComponent },
    { path: 'admin', component: ProfessorAdminComponent },
    { path: 'associate-with-universities', component: AssociateUniversityWithProfessorComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ]},

  { path: 'university', component: UniversityPrincipalComponent, children: [
    { path: 'create', component: UniversityCreateComponent },
    { path: 'edit/:codUniversity', component: UniversityEditComponent },
    { path: 'view', component: UniversityViewComponent },
    { path: 'admin', component: UniversityAdminComponent },
    { path: 'associate-with-professors', component: AssociateProfessorWithUniversityComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ]},

  { path: 'external', component: PrincipalComponent, children:[
    { path: 'professor', component: ProfessorsPrincipalComponent, children: [
      { path: 'professor-detail', component: ProfessorsDetailComponent },
      { path: 'professor-detail/:codProfessor', component: ProfessorsDetailComponent },
      { path: '', redirectTo: 'professor-detail', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]},
    { path: 'university', component: UniversitiesPrincipalComponent, children: [
      { path: 'university-detail', component: UniversitiesDetailComponent },
      { path: 'university-detail/:codUniversity', component: UniversitiesDetailComponent },
      { path: '', redirectTo: 'university-detail', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ]},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

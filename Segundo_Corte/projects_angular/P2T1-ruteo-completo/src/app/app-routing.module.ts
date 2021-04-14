import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfessorAdminComponent } from './components/public/professor-admin/professor-admin.component';
import { ProfessorCreateComponent } from './components/public/professor-create/professor-create.component';
import { ProfessorEditComponent } from './components/public/professor-edit/professor-edit.component';
import { ProfessorPrincipalComponent } from './components/public/professor-principal/professor-principal.component';
import { ProfessorViewComponent } from './components/public/professor-view/professor-view.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AccessComponent},
  {path: 'Professor', component: ProfessorPrincipalComponent, children: [
    {path: 'create', component: ProfessorCreateComponent},
    {path: 'edit/:codProfessor', component: ProfessorEditComponent},
    {path: 'view', component: ProfessorViewComponent},
    {path: 'admin', component: ProfessorAdminComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

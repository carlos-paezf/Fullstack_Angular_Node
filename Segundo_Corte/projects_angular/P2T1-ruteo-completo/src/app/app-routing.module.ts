import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeacherAdminComponent } from './components/public/teacher-admin/teacher-admin.component';
import { TeacherCreateComponent } from './components/public/teacher-create/teacher-create.component';
import { TeacherEditComponent } from './components/public/teacher-edit/teacher-edit.component';
import { TeacherPrincipalComponent } from './components/public/teacher-principal/teacher-principal.component';
import { TeacherViewComponent } from './components/public/teacher-view/teacher-view.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AccessComponent},
  {path: 'teacher', component: TeacherPrincipalComponent, children: [
    {path: 'create', component: TeacherCreateComponent},
    {path: 'edit/:codTeacher', component: TeacherEditComponent},
    {path: 'view', component: TeacherViewComponent},
    {path: 'admin', component: TeacherAdminComponent},
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

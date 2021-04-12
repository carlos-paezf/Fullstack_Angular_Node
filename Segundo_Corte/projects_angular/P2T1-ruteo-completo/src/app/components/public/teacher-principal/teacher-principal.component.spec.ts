import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPrincipalComponent } from './teacher-principal.component';

describe('TeacherPrincipalComponent', () => {
  let component: TeacherPrincipalComponent;
  let fixture: ComponentFixture<TeacherPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

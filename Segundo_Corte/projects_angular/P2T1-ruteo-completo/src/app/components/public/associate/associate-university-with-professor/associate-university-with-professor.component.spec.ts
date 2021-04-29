import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateUniversityWithProfessorComponent } from './associate-university-with-professor.component';

describe('AssociateUniversityWithProfessorComponent', () => {
  let component: AssociateUniversityWithProfessorComponent;
  let fixture: ComponentFixture<AssociateUniversityWithProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateUniversityWithProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateUniversityWithProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

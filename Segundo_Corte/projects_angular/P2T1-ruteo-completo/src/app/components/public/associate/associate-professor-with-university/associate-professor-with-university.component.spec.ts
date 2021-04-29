import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfessorWithUniversityComponent } from './associate-professor-with-university.component';

describe('AssociateProfessorWithUniversityComponent', () => {
  let component: AssociateProfessorWithUniversityComponent;
  let fixture: ComponentFixture<AssociateProfessorWithUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateProfessorWithUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProfessorWithUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

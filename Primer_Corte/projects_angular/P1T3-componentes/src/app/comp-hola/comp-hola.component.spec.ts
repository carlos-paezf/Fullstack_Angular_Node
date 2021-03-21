import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHolaComponent } from './comp-hola.component';

describe('CompHolaComponent', () => {
  let component: CompHolaComponent;
  let fixture: ComponentFixture<CompHolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompHolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbajoComponent } from './abajo.component';

describe('AbajoComponent', () => {
  let component: AbajoComponent;
  let fixture: ComponentFixture<AbajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicUpdateComponent } from './academic-update.component';

describe('AcademicUpdateComponent', () => {
  let component: AcademicUpdateComponent;
  let fixture: ComponentFixture<AcademicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicRegistryComponent } from './academic-registry.component';

describe('AcademicRegistryComponent', () => {
  let component: AcademicRegistryComponent;
  let fixture: ComponentFixture<AcademicRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicRegistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

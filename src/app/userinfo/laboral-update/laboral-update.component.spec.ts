import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralUpdateComponent } from './laboral-update.component';

describe('LaboralUpdateComponent', () => {
  let component: LaboralUpdateComponent;
  let fixture: ComponentFixture<LaboralUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboralUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboralUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

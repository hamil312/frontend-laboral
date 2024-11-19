import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralListComponent } from './laboral-list.component';

describe('LaboralListComponent', () => {
  let component: LaboralListComponent;
  let fixture: ComponentFixture<LaboralListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboralListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

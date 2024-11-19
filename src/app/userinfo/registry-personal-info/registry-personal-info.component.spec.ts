import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryPersonalInfoComponent } from './registry-personal-info.component';

describe('RegistryPersonalInfoComponent', () => {
  let component: RegistryPersonalInfoComponent;
  let fixture: ComponentFixture<RegistryPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryPersonalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionCreateComponent } from './publicacion-create.component';

describe('PublicacionCreateComponent', () => {
  let component: PublicacionCreateComponent;
  let fixture: ComponentFixture<PublicacionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionEliminarComponent } from './publicacion-eliminar.component';

describe('PublicacionEliminarComponent', () => {
  let component: PublicacionEliminarComponent;
  let fixture: ComponentFixture<PublicacionEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionEliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

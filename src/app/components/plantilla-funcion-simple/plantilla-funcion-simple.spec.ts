import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFuncionSimple } from './plantilla-funcion-simple';

describe('PlantillaFuncionSimple', () => {
  let component: PlantillaFuncionSimple;
  let fixture: ComponentFixture<PlantillaFuncionSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantillaFuncionSimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionSimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

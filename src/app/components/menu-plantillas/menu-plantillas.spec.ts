import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlantillas } from './menu-plantillas';

describe('MenuPlantillas', () => {
  let component: MenuPlantillas;
  let fixture: ComponentFixture<MenuPlantillas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPlantillas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPlantillas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

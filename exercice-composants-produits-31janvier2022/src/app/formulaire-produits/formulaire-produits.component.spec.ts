import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireProduitsComponent } from './formulaire-produits.component';

describe('FormulaireProduitsComponent', () => {
  let component: FormulaireProduitsComponent;
  let fixture: ComponentFixture<FormulaireProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

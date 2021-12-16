import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteurComposantComponent } from './selecteur-composant.component';

describe('SelecteurComposantComponent', () => {
  let component: SelecteurComposantComponent;
  let fixture: ComponentFixture<SelecteurComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteurComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteurComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

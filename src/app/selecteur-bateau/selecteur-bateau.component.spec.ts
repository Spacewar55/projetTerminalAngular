import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteurBateauComponent } from './selecteur-bateau.component';

describe('SelecteurBateauComponent', () => {
  let component: SelecteurBateauComponent;
  let fixture: ComponentFixture<SelecteurBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteurBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteurBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
